import { Link } from 'react-router-dom';
import logo from '../assets/shared/desktop/logo-white.svg';
import facebook from '../assets/shared/desktop/icon-facebook.svg';
import twitter from '../assets/shared/desktop/icon-twitter.svg';
import instagram from '../assets/shared/desktop/icon-instagram.svg';

const Footer = () => {
  return ( 
    <footer className="footer">
      <div className="footer-container">
        <Link to="/">
          <img className="footer-img" src={logo} alt="Coffeeroasters" />
        </Link>
        <nav>
          <ul className="footer-container-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/plan">Create your plan</Link>
            </li>
          </ul>
        </nav>
        <div className="footer-social">
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
          <img src={instagram} alt="Instagram" />
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;