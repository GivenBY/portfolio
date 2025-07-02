import React from "react";
import { Command } from "../types";

interface CommandHistoryProps {
  commands: Command[];
  streamingIndex: number;
  streamingText: string;
}

const CommandHistory: React.FC<CommandHistoryProps> = ({
  commands,
  streamingIndex,
  streamingText,
}) => {
  return (
    <>
      {commands.map((command, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center gap-2 text-ctp-subtext1">
            <span className="text-ctp-blue">givenby@portfolio</span>
            <span className="text-ctp-overlay0">:</span>
            <span className="text-ctp-green">~</span>
            <span className="text-ctp-overlay0">$</span>
            <span className="text-ctp-text">{command.input}</span>
            <span className="text-ctp-overlay0 text-xs ml-auto">
              {command.timestamp}
            </span>
          </div>

          {(command.output || command.isStreaming) && (
            <div className="mt-2 ml-4 text-ctp-text whitespace-pre-wrap">
              {command.isStreaming && streamingIndex === index ? (
                <span>
                  {streamingText}
                  <span className="animate-pulse bg-ctp-mauve w-2 h-4 inline-block ml-1 align-middle"></span>
                </span>
              ) : (
                <span className="animate-fadeIn">{command.output}</span>
              )}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default CommandHistory;
