import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeContextValue = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    console.log("useEffect 1 run: ", theme);

    const storedTheme = window.localStorage.getItem("theme");
    console.log("StoredTheme: ", storedTheme);
    if (storedTheme) {
      setTheme(storedTheme);
    }
    console.log("useEffect 1 end: ", theme);
  }, []);

  useEffect(() => {
    console.log("UseEffect 2 run: ", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const contextValue: ThemeContextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
