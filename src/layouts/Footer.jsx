import facebookImg from "../assets/shared/desktop/icon-facebook.svg";
import instagramImg from "../assets/shared/desktop/icon-instagram.svg";
import twitterImg from "../assets/shared/desktop/icon-twitter.svg";
import logo from "../assets/shared/desktop/logo_white.svg";

const Footer = () => {
  return (
    <footer className="footer container">
      <img src={logo} alt="coffeeroasters" />
      <ul className="footer-nav">
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>CREATE YOUR PLAN</li>
      </ul>
      <div className="footer-links">
        <img src={facebookImg} alt="Facebook link" />
        <img src={twitterImg} alt="Twitter link" />
        <img src={instagramImg} alt="Instagram link" />
      </div>
    </footer>
  );
};

export default Footer;
