import React from "react";
import { portfolioData } from "../data/portfolioData";

interface QuickCommandsProps {
  onCommandClick: (command: string) => void;
  isTyping: boolean;
}

const QuickCommands: React.FC<QuickCommandsProps> = ({
  onCommandClick,
  isTyping,
}) => {
  return (
    <div className="mt-3 sm:mt-6">
      <div className="mb-2 text-xs sm:text-sm text-ctp-subtext0">
        Quick Commands:
      </div>
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {Object.keys(portfolioData).map((file) => (
          <button
            key={file}
            onClick={() => !isTyping && onCommandClick(`cat ${file}`)}
            className="px-2 py-1 sm:px-3 sm:py-1 bg-ctp-surface0/50 border border-ctp-surface1 rounded text-ctp-subtext1 text-xs sm:text-sm hover:bg-ctp-surface1 hover:text-ctp-text transition-all duration-200 disabled:opacity-50 touch-manipulation"
            disabled={isTyping}
          >
            cat {file}
          </button>
        ))}
        <button
          onClick={() => !isTyping && onCommandClick("help")}
          className="px-2 py-1 sm:px-3 sm:py-1 bg-ctp-blue/10 border border-ctp-blue/30 rounded text-ctp-blue text-xs sm:text-sm hover:bg-ctp-blue/20 transition-all duration-200 disabled:opacity-50 touch-manipulation"
          disabled={isTyping}
        >
          help
        </button>
        <button
          onClick={() => !isTyping && onCommandClick("clear")}
          className="px-2 py-1 sm:px-3 sm:py-1 bg-ctp-red/10 border border-ctp-red/30 rounded text-ctp-red text-xs sm:text-sm hover:bg-ctp-red/20 transition-all duration-200 disabled:opacity-50 touch-manipulation"
          disabled={isTyping}
        >
          clear
        </button>
      </div>
      <div className="mt-2 text-xs text-ctp-overlay0">
        Tap commands or type manually in the terminal
      </div>
    </div>
  );
};

export default QuickCommands;
