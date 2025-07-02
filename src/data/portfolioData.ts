import { PortfolioData } from "../types";

export const portfolioData: PortfolioData = {
  "about.md": {
    content: `# Suryakant Upadhyay - Full Stack Developer

Welcome to my terminal! I'm a passionate full stack developer building modern web applications.

## Background
- 🎓 Computer Science Final year student from Dy Patil International University
- 💼 Currently Software Developer Intern at ByteHint
- 🌍 Based in Maharashtra, India
- 🚀 Specialized in React, Express, Node.js, and cloud technologies

## Philosophy
I believe in writing clean, maintainable code and creating exceptional user experiences. 
I'm passionate about emerging technologies and always eager to learn new tools and frameworks.

When I'm not coding, you'll find me gaming, watching anime, or contributing to open source projects.`,
    type: "md",
  },
  "skills.json": {
    content: `{
  "languages": [
    "JavaScript/TypeScript",
    "Python",
    "Java",
    "SQL"
  ],
  "frontend": [
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  "backend": [
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Redis"
  ],
  "cloud": [
    "AWS",
    "Docker",
    "Kubernetes",
    "CI/CD"
  ],
  "tools": [
    "Git",
    "VS Code",
    "Postman",
    "Linux",
    "Figma"
  ]
}`,
    type: "json",
  },
  "projects.md": {
    content: `# Featured Projects

## 🚀 SyncWave - Discord Clone
A real-time chat application built with modern web technologies.
- **Tech:** React, Node.js, WebSocket, PostgreSQL, Prisma, Tailwind CSS
- **Features:** Channels, direct messages, user authentication, file sharing
- **Impact:** Enhanced user engagement and retention
- **Link:** github.com/givenby/syncwave

## 🌐 m3u8_cors_helper
A CORS proxy for m3u8 streaming
- **Tech:** python, fastapi, uvicorn
- **Features:** Handles CORS for m3u8 files, supports multiple domains
- **Impact:** Simplified video streaming integration
- **Link:** github.com/givenby/m3u8_cors_helper

## 🎨 MeowMeow
A simple GTK 3 wrapper around groq for interaction with Groq API 
- **Tech:** python, GTK 3, Groq API
- **Features:** User-friendly interface, customizable themes, real-time updates
- **Impact:** Improved user experience for Groq API interactions
- **Link:** github.com/givenby/meowmeow

`,
    type: "md",
  },
  "contact.txt": {
    content: `📧 Email: givenby99@gmail.com
🌐 Website: givenby99.dev
💼 LinkedIn: linkedin.com/in/suryakant-upadhyay
🐙 GitHub: github.com/givenby
📱 Phone: +91 85119 64073
📍 Location: Maharashtra, India

Feel free to reach out! I'm always interested in discussing new opportunities,
collaborating on interesting projects, or just chatting about technology.

Response time: Usually within 24 hours
Best time to contact: 9 AM - 9 PM IST
Languages: Hindi (Native), English (Conversational)`,
    type: "text",
  },
};
