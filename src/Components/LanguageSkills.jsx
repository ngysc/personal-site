import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSkills = () => {
  const { t } = useTranslation();
  const [progressBarPercents, setProgressBarPercents] = useState([0, 0]);
  const [showProgressBar, setShowProgressBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const progress = document.querySelector(".progress-bars-wrapper");
      if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        setShowProgressBar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showProgressBar) {
      setProgressBarPercents([90, 100]);
    }
  }, [showProgressBar]);

  return (
    <div className="progress-bars-wrapper">
      <div className="progress-bar">
        <p className="progress-text">
          {t("language1")}
          <span>{showProgressBar ? progressBarPercents[0] : ""}</span>%
        </p>
        <div
          className="progress-percent"
          style={{ width: `${showProgressBar ? progressBarPercents[0] : 0}%` }}
        ></div>
      </div>
      <div className="progress-bar">
        <p className="progress-text">
          {t("language2")}
          <span>{showProgressBar ? progressBarPercents[1] : ""}</span>%
        </p>
        <div
          className="progress-percent"
          style={{ width: `${showProgressBar ? progressBarPercents[1] : 0}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LanguageSkills;
