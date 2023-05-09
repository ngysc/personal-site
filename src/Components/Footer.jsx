const Footer = () => {
  return (
    <div className="bottom-container">
      <div className="icons">
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/sarolta-nagy-7630931b0/"
        >
          <img className="link-icon" src="./assets/linkedin.png" alt="" />
        </a>
        <a
          className="footer-link"
          href="https://github.com/ngysc/personal-site"
        >
          <img className="link-icon" src="./assets/github.png" alt="" />
        </a>
        <a
          className="footer-link"
          href="https://www.instagram.com/qveenofthesuccubi/?hl=hu"
        >
          <img className="link-icon" src="./assets/instagram.png" alt="" />
        </a>
      </div>

      <p>© 2023 Sarolta Nagy.</p>
      <a
        href="https://www.flaticon.com/free-stickers/technology"
        title="technology stickers"
      >
        Technology stickers created by Stickers - Flaticon
      </a>
      <a
        href="https://www.flaticon.com/free-icons/instagram-logo"
        title="instagram logo icons"
      >
        Logo icons created by riajulislam - Flaticon
      </a>
    </div>
  );
};

export default Footer;
