import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setDark(d => !d)}
      className="fixed top-4 right-4 z-50 p-2.5 rounded-full bg-card border border-border shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-muted-foreground" />}
    </motion.button>
  );
}
