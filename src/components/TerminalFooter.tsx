import React from "react";

const TerminalFooter: React.FC = () => {
  return (
    <div className="mt-4 sm:mt-8 text-center text-ctp-subtext0 text-xs sm:text-sm px-2">
      <p className="mb-2">
        Built with{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ctp-blue hover:underline"
        >
          React
        </a>{" "}
        &{" "}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ctp-blue hover:underline"
        >
          TypeScript
        </a>{" "}
        • Styled with{" "}
        <a
          href="https://catppuccin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ctp-pink hover:underline"
        >
          Catppuccin
        </a>{" "}
        theme
      </p>
      <p className="text-xs text-ctp-overlay0">
        <span className="hidden sm:inline">
          Click anywhere on the terminal to focus • Use ↑↓ arrows for command
          history
        </span>
        <span className="sm:hidden">
          Tap terminal to focus • Use buttons below to run commands
        </span>
      </p>
    </div>
  );
};

export default TerminalFooter;
