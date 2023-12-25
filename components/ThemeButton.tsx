"use client";

import { useContext } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { ThemeContext } from "@/contexts/ThemeContext";


const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
        <button
          className="p-1 rounded-full border-2 border-primary-light dark:border-primary-dark"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <SunIcon className="h-6 w-6 text-primary-light" />
          ) : (
            <MoonIcon className="h-6 w-6 text-primary-dark" />
          )}
        </button>
    </>
  );
};

export default ThemeButton;
