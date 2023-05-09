import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const Header = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="main">
        <h1>{t("welcomeMessage1")}</h1>
        <h2>{t("welcomeMessage2")}</h2>
        <div className="btn-language">
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("hu")}>Magyar</button>
        </div>
      </div>
    </>
  );
};

export default Header;
