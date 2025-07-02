import { useState, useCallback, useRef } from "react";
import { Command } from "../types";
import { availableCommands } from "../data/commands";
import { portfolioData } from "../data/portfolioData";

export const useTerminal = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [streamingIndex, setStreamingIndex] = useState(-1);
  const [streamingText, setStreamingText] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const initializedRef = useRef(false);

  const streamText = useCallback(async (text: string, commandIndex: number) => {
    setStreamingIndex(commandIndex);
    setStreamingText("");

    const isMobile = window.innerWidth < 768;
    const words = text.split(/(\s+)/);
    let currentText = "";

    for (let i = 0; i < words.length; i++) {
      currentText += words[i];
      setStreamingText(currentText);

      const isWhitespace = /^\s+$/.test(words[i]);
      const baseDelay = isMobile ? 15 : 25; // Slower streaming
      const randomDelay = isMobile ? 15 : 40; // More variation
      const delay = isWhitespace
        ? isMobile
          ? 3
          : 8
        : Math.random() * randomDelay + baseDelay;

      await new Promise((resolve) => setTimeout(resolve, delay));
    }

    await new Promise((resolve) => setTimeout(resolve, isMobile ? 50 : 150)); // Longer final delay

    setCommands((prev) =>
      prev.map((cmd, idx) =>
        idx === commandIndex
          ? { ...cmd, output: text, isStreaming: false }
          : cmd
      )
    );

    setStreamingIndex(-1);
    setStreamingText("");
  }, []);

  const executeCommand = useCallback(
    (input: string) => {
      const [command, ...args] = input.trim().split(" ");
      const timestamp = new Date().toLocaleTimeString();
      let output = "";

      if (input.trim() && !commandHistory.includes(input.trim())) {
        setCommandHistory((prev) => [...prev, input.trim()]);
      }
      setHistoryIndex(-1);

      switch (command.toLowerCase()) {
        case "help":
          output = Object.entries(availableCommands)
            .map(([cmd, desc]) => `${cmd.padEnd(10)} - ${desc}`)
            .join("\n");
          break;
        case "ls":
          output = Object.keys(portfolioData).join("  ");
          break;
        case "clear":
          setCommands([]);
          setCurrentInput("");
          return;
        case "whoami":
          output = "Suryakant Upadhyay Full Stack Developer & Tech Enthusiast";
          break;
        case "date":
          output = new Date().toString();
          break;
        case "pwd":
          output = "/home/givenby/portfolio";
          break;
        case "cat": {
          const filename = args[0];
          if (!filename) {
            output =
              "cat: missing file operand\nTry: cat <filename>\nAvailable files: " +
              Object.keys(portfolioData).join(", ");
          } else if (portfolioData[filename]) {
            const newCommand: Command = {
              input,
              output: "",
              isStreaming: true,
              timestamp,
            };

            setCommands((prev) => {
              const newCommands = [...prev, newCommand];
              const commandIndex = newCommands.length - 1;

              setTimeout(() => {
                streamText(portfolioData[filename].content, commandIndex);
              }, 50);

              return newCommands;
            });

            setCurrentInput("");
            return;
          } else {
            output = `cat: ${filename}: No such file or directory\nAvailable files: ${Object.keys(
              portfolioData
            ).join(", ")}`;
          }
          break;
        }
        default:
          output = `Command not found: ${command}\nType 'help' for available commands.`;
      }

      const newCommand: Command = { input, output, timestamp };
      setCommands((prev) => [...prev, newCommand]);
      setCurrentInput("");
    },
    [commandHistory, streamText]
  );

  const typeText = useCallback(
    async (text: string, delay: number = 35) => {
      // Slower default typing
      setIsTyping(true);
      setCurrentInput("");
      for (let i = 0; i <= text.length; i++) {
        setCurrentInput(text.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      await new Promise((resolve) => setTimeout(resolve, 300)); // Longer pause after typing
      setIsTyping(false);
      executeCommand(text);
    },
    [executeCommand]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (isTyping) return;

      switch (e.key) {
        case "Enter":
          e.preventDefault();
          if (currentInput.trim()) {
            executeCommand(currentInput);
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (commandHistory.length > 0) {
            const newIndex =
              historyIndex === -1
                ? commandHistory.length - 1
                : Math.max(0, historyIndex - 1);
            setHistoryIndex(newIndex);
            setCurrentInput(commandHistory[newIndex]);
          }
          break;
        case "ArrowDown":
          e.preventDefault();
          if (historyIndex !== -1) {
            const newIndex = historyIndex + 1;
            if (newIndex >= commandHistory.length) {
              setHistoryIndex(-1);
              setCurrentInput("");
            } else {
              setHistoryIndex(newIndex);
              setCurrentInput(commandHistory[newIndex]);
            }
          }
          break;
        case "Escape":
          e.preventDefault();
          setCurrentInput("");
          setHistoryIndex(-1);
          break;
        // Let all other keys (including Backspace) work normally
      }
    },
    [isTyping, currentInput, executeCommand, commandHistory, historyIndex]
  );

  const runInitialCommands = useCallback(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    const initialCommands = ["whoami", "ls"];
    const isMobile = window.innerWidth < 768;
    let delay = isMobile ? 200 : 800; // Slower startup
    const commandDelay = isMobile ? 800 : 1500; // Longer delays between commands

    initialCommands.forEach((cmd) => {
      setTimeout(() => typeText(cmd, isMobile ? 25 : 50), delay);
      delay += commandDelay;
    });
  }, [typeText]);

  return {
    commands,
    currentInput,
    setCurrentInput,
    isTyping,
    streamingIndex,
    streamingText,
    commandHistory,
    historyIndex,
    executeCommand,
    typeText,
    handleKeyDown,
    runInitialCommands,
  };
};
