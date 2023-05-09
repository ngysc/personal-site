import { useState, useEffect } from "react";

const Skills = () => {
  const [progressBarPercents, setProgressBarPercents] = useState([
    0, 0, 0, 0, 0,
  ]);
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
      setProgressBarPercents([90, 90, 90, 85, 85]);
    }
  }, [showProgressBar]);

  return (
    <div className="progress-bars-wrapper">
      <div className="progress-bar">
        <p className="progress-text">
          HTML
          <span>{showProgressBar ? progressBarPercents[0] : ""}</span>%
        </p>
        <div
          className="progress-percent"
          style={{ width: `${showProgressBar ? progressBarPercents[0] : 0}%` }}
        ></div>
      </div>
      <div className="progress-bar">
        <p className="progress-text">
          CSS
          <span>{showProgressBar ? progressBarPercents[1] : ""}</span>%
        </p>
        <div
          className="progress-percent"
          style={{ width: `${showProgressBar ? progressBarPercents[1] : 0}%` }}
        ></div>
      </div>
      <div className="progress-bar">
        <p className="progress-text">
          React
          <span>{showProgressBar ? progressBarPercents[2] : ""}</span>%
        </p>
        <div
          className="progress-percent"
          style={{ width: `${showProgressBar ? progressBarPercents[2] : 0}%` }}
        ></div>
      </div>
      <div className="progress-bar">
        <p className="progress-text">
          JavaScript
          <span>{showProgressBar ? progressBarPercents[3] : ""}</span>%
        </p>
        <div
          className="progress-percent"
          style={{ width: `${showProgressBar ? progressBarPercents[3] : 0}%` }}
        ></div>
      </div>
      <div className="progress-bar">
        <p className="progress-text">
          TypeScript
          <span>{showProgressBar ? progressBarPercents[4] : ""}</span>%
        </p>
        <div
          className="progress-percent"
          style={{ width: `${showProgressBar ? progressBarPercents[4] : 0}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
