import { useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";

export const ThemeProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("social.app.ui.theme") as "light" | "dark") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("social.app.ui.theme", theme);
  }, [theme]);

  const toggleTheme = (): void => {
    const val = theme === "light" ? "dark" : "light";
    setTheme(val);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
