import React from "react";
import { Terminal as TerminalIcon } from "lucide-react";

const WelcomeMessage: React.FC = () => {
  return (
    <div className="mb-3 sm:mb-4 text-ctp-subtext1">
      <div className="flex items-center gap-2 mb-2">
        <TerminalIcon className="w-4 h-4 text-ctp-mauve" />
        <span className="text-ctp-text text-sm sm:text-base">
          Portfolio v2.1.0
        </span>
      </div>
      <div className="text-ctp-subtext0 text-xs sm:text-sm">
        <div className="hidden sm:block">
          Welcome! Type <span className="text-ctp-yellow">'help'</span> for
          available commands, use <span className="text-ctp-yellow">↑↓</span>{" "}
          arrows for command history...
        </div>
        <div className="sm:hidden">
          Welcome! Type <span className="text-ctp-yellow">'help'</span> or use
          quick commands below.
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
