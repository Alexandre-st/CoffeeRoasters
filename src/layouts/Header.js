import { Link } from 'react-router-dom';
import logo from '../assets/shared/desktop/logo.svg';
import Menu from '../components/Menu';

const Header = () => {


  return (  
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <img className="header-logo" src={logo} alt="Coffeeroasters" />
        </Link>

        <nav className="header-nav-desktop">
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

        <Menu />
      </div>
    </header>
  );
}
 
export default Header;