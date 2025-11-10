"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const prefersDark = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const initialTheme: Theme = prefersDark() ? "dark" : "light";
    setTheme(initialTheme);
    document.body.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const handleToggle = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.body.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <button type="button" className="theme-toggle" onClick={handleToggle}>
      {theme === "dark" ? "☀️ Light mode" : "🌙 Dark mode"}
    </button>
  );
}
