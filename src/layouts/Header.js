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

        <Menu />
      </div>
    </header>
  );
}
 
export default Header;