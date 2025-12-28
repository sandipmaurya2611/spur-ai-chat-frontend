# AI Support Chat - Frontend

A modern, responsive AI-powered support chat interface built with **React 19**, **TypeScript**, and **Tailwind CSS**. This frontend serves as the user interface for interacting with an AI Support Agent, featuring real-time feedback and session persistence.

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 7](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management:** React Hooks (`useState`, `useCallback`, `useEffect`)
- **API Communication:** Native Fetch API
- **Deployment:** Optimized for [Vercel](https://vercel.com/)

## ✨ Key Features

- **Real-time Interaction:** Smooth chat interface with instant user feedback.
- **Agent Typing Indicator:** Visual feedback ("Agent is typing...") when the AI is generating a response.
- **Session Persistence:** Remembers conversation history using `localStorage` and backend session synchronization.
- **Responsive Design:** Premium look and feel that works perfectly on desktop, tablet, and mobile devices.
- **Environment Driven:** Production-safe configuration using Vite's environment variables.
- **Automatic Scrolling:** Smart scrolling to bottom for new messages.
- **Quick Actions:** Pre-defined question chips for common support queries.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

## 🛠️ Installation

1. **Navigate to the frontend directory:**
   ```bash
   cd Frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root of the `Frontend` directory:
   ```env
   VITE_API_BASE_URL=http://localhost:3000
   ```
   *(Replace with your Railway backend URL for production)*

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```text
src/
├── components/       # Reusable UI components (Chat, Input, Messages)
├── hooks/            # Custom React hooks (useChat, useAutoScroll)
├── services/         # API service layer (chatService)
├── styles/           # CSS modules and Tailwind themes
├── types/            # TypeScript interfaces and types
├── utils/            # Helper functions and storage managers
├── App.tsx           # Main application entry component
└── config.ts         # Environment-driven configuration
```

## 📜 Available Scripts

- `npm run dev`: Start the local development server with HMR.
- `npm run build`: Build the production-ready bundle.
- `npm run lint`: Run ESLint to find and fix code style issues.
- `npm run preview`: Locally preview the production build.

## 🌐 Deployment (Vercel)

This frontend is designed for seamless deployment on Vercel. 

