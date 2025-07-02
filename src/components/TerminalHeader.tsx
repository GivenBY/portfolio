import React from "react";
import { Terminal as TerminalIcon, Github, Linkedin, Mail } from "lucide-react";

const TerminalHeader: React.FC = () => {
  return (
    <div className="border-b border-ctp-surface0 bg-ctp-mantle/80 backdrop-blur-sm">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
        <TerminalIcon className="w-4 h-4 sm:w-5 sm:h-5 text-ctp-mauve" />
        <span className="text-ctp-blue text-sm sm:text-base">
          Suryakant@givenby
        </span>
        <span className="text-ctp-overlay0 hidden sm:inline">:</span>
        <span className="text-ctp-green hidden sm:inline">~</span>
        <span className="text-ctp-overlay0 hidden sm:inline">$</span>
        <div className="flex-1"></div>
        <div className="flex gap-2 sm:gap-4">
          <a
            href="https://github.com/givenby"
            className="text-ctp-subtext0 hover:text-ctp-mauve transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://linkedin.com/in/suryakant-upadhyay/"
            className="text-ctp-subtext0 hover:text-ctp-blue transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href="mailto:givenby99@gmail.com"
            className="text-ctp-subtext0 hover:text-ctp-pink transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TerminalHeader;
