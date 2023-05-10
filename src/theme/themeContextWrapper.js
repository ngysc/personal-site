import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "../contexts/themeContext";

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? themes.dark
      : themes.light
  );

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.remove("white-content");
        break;
      case themes.dark:
      default:
        document.body.classList.add("white-content");
        break;
    }
  }, [theme]);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaQueryChange = (event) => {
      setTheme(event.matches ? themes.dark : themes.light);
    };
    mediaQueryList.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
