export interface Command {
  input: string;
  output: string;
  isStreaming?: boolean;
  timestamp: string;
}

export interface PortfolioData {
  [key: string]: {
    content: string;
    type: 'text' | 'json' | 'md';
  };
}

export interface AvailableCommands {
  [key: string]: string;
}