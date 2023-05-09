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
        <h2>My Skills.</h2>
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
        <h2>Get In Touch</h2>
        <img className="contact-img" src="/assets/computer.png" alt="" />
        <h3>Lorem ipsum dolor sit amet, non elit.</h3>
        <p className="contact-message">
          Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales,
          tellus donec dui, ornare erat.
        </p>
        <button className="btn" href="#">
          CONTACT ME
        </button>
      </div>
    </div>
  );
};

export default About;
