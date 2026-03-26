import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Buffer } from "buffer";

// @ts-ignore
window.Buffer = Buffer;

// Prevent FOUC on dark mode
const theme = localStorage.getItem("theme");
if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
