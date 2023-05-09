import { ThemeContext, themes } from "../contexts/themeContext";
import { useState } from "react";

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <button
            className="btn-footer"
            color="link"
            onClick={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          >
            {" "}
            <p>Dark/Light mode</p>
            <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
            <span className="d-lg-none d-md-block">Switch mode</span>
          </button>
        )}
      </ThemeContext.Consumer>
    </>
  );
};

export default ThemeToggler;
