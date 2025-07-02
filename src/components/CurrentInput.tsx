import React from "react";

interface CurrentInputProps {
  currentInput: string;
  isTyping: boolean;
  isInputFocused: boolean;
}

const CurrentInput: React.FC<CurrentInputProps> = ({
  currentInput,
  isTyping,
  isInputFocused,
}) => {
  return (
    <div className="flex items-center gap-1 sm:gap-2 text-ctp-subtext1 text-sm sm:text-base flex-wrap">
      <div className="flex items-center gap-1 sm:gap-2">
        <span className="text-ctp-blue">givenby@portfolio</span>
        <span className="text-ctp-overlay0 hidden sm:inline">:</span>
        <span className="text-ctp-green hidden sm:inline">~</span>
        <span className="text-ctp-overlay0">$</span>
      </div>
      <div className="flex items-center flex-1 min-w-0">
        <span
          className="text-ctp-text break-all"
          dir="ltr"
          style={{ unicodeBidi: "plaintext" }}
        >
          {currentInput}
        </span>
        {(isTyping || currentInput || isInputFocused) && (
          <span className="animate-pulse bg-ctp-mauve w-2 h-4 inline-block ml-1 flex-shrink-0"></span>
        )}
      </div>
    </div>
  );
};

export default CurrentInput;
