import { Link } from 'react-router-dom';
import logo from '../assets/shared/desktop/logo.svg';
import facebook from '../assets/shared/desktop/icon-facebook.svg';
import twitter from '../assets/shared/desktop/icon-twitter.svg';
import instagram from '../assets/shared/desktop/icon-instagram.svg';

const Footer = () => {
  return ( 
    <footer className="footer">
      <div className="footer-container">
        <img src={logo} alt="Coffeeroasters" />
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/plan">
              <li>Create your plan</li>
            </Link>
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