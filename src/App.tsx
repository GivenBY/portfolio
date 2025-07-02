import { useEffect, useRef } from "react";
import TerminalHeader from "./components/TerminalHeader";
import WelcomeMessage from "./components/WelcomeMessage";
import CommandHistory from "./components/CommandHistory";
import CurrentInput from "./components/CurrentInput";
import QuickCommands from "./components/QuickCommands";
import TerminalFooter from "./components/TerminalFooter";
import { useTerminal } from "./hooks/useTerminal";

function App() {
  const {
    commands,
    currentInput,
    setCurrentInput,
    isTyping,
    streamingIndex,
    streamingText,
    typeText,
    handleKeyDown,
    runInitialCommands,
  } = useTerminal();

  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands, streamingText]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    runInitialCommands();
  }, [runInitialCommands]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-ctp-base via-ctp-mantle to-ctp-crust text-ctp-text font-mono">
      <TerminalHeader />

      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-6 max-w-4xl">
        <div
          ref={terminalRef}
          className="bg-ctp-mantle/90 backdrop-blur-sm rounded-lg border border-ctp-surface0 shadow-2xl shadow-ctp-crust/50 p-3 sm:p-6 h-[calc(100vh-280px)] sm:h-[70vh] sm:min-h-[70vh] sm:max-h-[70vh] overflow-y-auto scrollbar-hide cursor-text"
          onClick={() => inputRef.current?.focus()}
          role="textbox"
          aria-label="Terminal interface"
        >
          <WelcomeMessage />

          <CommandHistory
            commands={commands}
            streamingIndex={streamingIndex}
            streamingText={streamingText}
          />

          <CurrentInput
            currentInput={currentInput}
            isTyping={isTyping}
            isInputFocused={document.activeElement === inputRef.current}
          />

          <input
            ref={inputRef}
            className="opacity-0 absolute top-0 left-0 w-full h-full"
            value={currentInput}
            onChange={(e) => {
              // Normalize input to prevent text reversal
              const value = e.target.value.replace(/[\u202E\u202D\u202C]/g, "");
              setCurrentInput(value);
            }}
            onKeyDown={handleKeyDown}
            disabled={isTyping}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            inputMode="text"
            dir="ltr"
            style={{
              fontSize: "16px",
              background: "transparent",
              border: "none",
              outline: "none",
              color: "transparent",
              caretColor: "transparent",
              direction: "ltr",
              textAlign: "left",
            }}
          />
        </div>

        <QuickCommands onCommandClick={typeText} isTyping={isTyping} />

        <TerminalFooter />
      </div>
    </div>
  );
}

export default App;
