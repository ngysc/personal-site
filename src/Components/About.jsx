const About = () => {
  return (
    <div className="middle-container">
      <div className="profile">
        <img
          src="./assets/bwportrait.png"
          alt="portrait"
          className="portrait"
        />
        <div className="text-wrapper">
          <h2>Hello.</h2>
          <p className="intro">
            Lorem ipsum dolor sit amet, vitae volutpat, dui conubia, dolor urna.
            Non auctor, montes nulla distinctio.
          </p>
        </div>
      </div>
      <hr />
      <div className="skills">
        <h2>My Skills.</h2>
        <div className="skill-row">
          <img className="skill-img" src="/assets/computer.png" alt="" />
          <h3>Lorem & Ipsum</h3>
          <p className="skill-para">
            Lorem ipsum dolor sit amet, quis in duis, iaculis id felis.
            Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit
            nam, lectus ante, ut lorem eros.
          </p>
        </div>
        <div className="skill-row second">
          <img className="skill2-img" src="/assets/joystick.png" alt="" />
          <h3>Lorem Ipsum Dolor</h3>
          <p className="skill2-para">
            Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu,
            bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel
            eu, rutrum nam.
          </p>
        </div>
      </div>
      <hr />
      <div className="contact-me">
        <h2>Get In Touch</h2>
        <img className="contact-img" src="/assets/black-cat.png" alt="" />
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
