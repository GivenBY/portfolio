/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "Fira Code",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      colors: {
        // Catppuccin Mocha theme colors
        "ctp-rosewater": "#f5e0dc",
        "ctp-flamingo": "#f2cdcd",
        "ctp-pink": "#f5c2e7",
        "ctp-mauve": "#cba6f7",
        "ctp-red": "#f38ba8",
        "ctp-maroon": "#eba0ac",
        "ctp-peach": "#fab387",
        "ctp-yellow": "#f9e2af",
        "ctp-green": "#a6e3a1",
        "ctp-teal": "#94e2d5",
        "ctp-sky": "#89dceb",
        "ctp-sapphire": "#74c7ec",
        "ctp-blue": "#89b4fa",
        "ctp-lavender": "#b4befe",
        "ctp-text": "#cdd6f4",
        "ctp-subtext1": "#bac2de",
        "ctp-subtext0": "#a6adc8",
        "ctp-overlay2": "#9399b2",
        "ctp-overlay1": "#7f849c",
        "ctp-overlay0": "#6c7086",
        "ctp-surface2": "#585b70",
        "ctp-surface1": "#45475a",
        "ctp-surface0": "#313244",
        "ctp-base": "#1e1e2e",
        "ctp-mantle": "#181825",
        "ctp-crust": "#11111b",
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(5px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
