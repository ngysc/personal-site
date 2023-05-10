import Skills from "./Skills";
import { useTranslation } from "react-i18next";

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
        <hr />
        <div className="skill-row second">
          <img className="skill2-img" src="/assets/joystick.png" alt="" />
          <h2>{t("hobbiesTitle")}</h2>
          <p className="skill2-para">{t("hobbies")}</p>
        </div>
      </div>
      <hr />
      <div className="contact-me">
        <h2>{t("contact")}</h2>
        <img className="contact-img" src="/assets/computer.png" alt="" />
        <h3>{t("contact2")}</h3>
        <p className="contact-message">{t("contact3")}</p>
        <button className="btn" href="#">
          {t("contactButton")}
        </button>
      </div>
    </div>
  );
};

export default About;
