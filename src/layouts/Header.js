import { Link } from 'react-router-dom';
import logo from '../assets/shared/desktop/logo.svg';

const Header = () => {
  return (  
    <header className="header">
      <div className="header-container">
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
      </div>
    </header>
  );
}
 
export default Header;