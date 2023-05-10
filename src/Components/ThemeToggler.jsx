import { ThemeContext, themes } from "../contexts/themeContext";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { t } = useTranslation();

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
            <p>{t("darkToggler")}</p>
          </button>
        )}
      </ThemeContext.Consumer>
    </>
  );
};

export default ThemeToggler;
