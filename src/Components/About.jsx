import Skills from "./Skills";
import LanguageSkills from "./LanguageSkills";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="middle-container">
      <div className="profile">
        <img
          src="./assets/bwportrait.png"
          alt="portrait"
          className="portrait"
        />
        <div className="text-wrapper">
          <p className="intro">{t("intro")}</p>
        </div>
      </div>
      <hr />
      <div className="skills">
        <h2>{t("skills")}</h2>
        <div className="skill-row first">
          <p className="skill-para">
            <Skills />
          </p>
        </div>
        <h2>{t("languageSkills")}</h2>
        <div className="skill-row first">
          <p className="skill-para">
            <LanguageSkills />
          </p>
        </div>
        <hr />
        <div className="skill-row second school">
          <h2 className="school-title">{t("schools")}</h2>
          <h5 className="skill2-para school">{t("school1")}</h5>
          <li>{t("description")}</li>
          <li>{t("description2")}</li>
        </div>
        <hr />
        <div className="skill-row second">
          <img className="skill2-img" src="/assets/joystick.png" alt="" />
          <h2 className="hobbies-title">{t("hobbiesTitle")}</h2>
          <p className="skill2-para">{t("hobbies")}</p>
        </div>
      </div>
      <hr />
      <div className="contact-me">
        <h2>{t("contact")}</h2>
        <img className="contact-img" src="/assets/computer.png" alt="" />
        <h3>{t("contact2")}</h3>
        <p className="contact-message">{t("contact3")}</p>
        <Link to="/contact">
          <button className="btn" href="#">
            {t("contactButton")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
