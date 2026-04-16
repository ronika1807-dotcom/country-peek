import { createContext, useState, useContext } from "react";

// 1. create the context
const ThemeContext = createContext();

// 2. export it so components can import it
export { ThemeContext };

export function ThemeProvider({ children }) {
  // 3. declare theme state — start with 'light'
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    // 4. toggle between 'light' and 'dark'
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";

      // 5. update document body attribute
      if (next === "light") {
        document.body.removeAttribute("data-theme");
      } else {
        document.body.setAttribute("data-theme", next);
      }

      return next;
    });
  }

  // 6. return Provider wrapping children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 7. export a useTheme custom hook
export function useTheme() {
  return useContext(ThemeContext);
}
