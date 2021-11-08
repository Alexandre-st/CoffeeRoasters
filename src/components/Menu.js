import { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../assets/shared/mobile/icon-hamburger.svg';
import CloseMenu from '../assets/shared/mobile/icon-close.svg';

const Menu = () => {

  const [menu, setMenu] = useState(false);
 
  const openMenu = () => {
    if (!menu) {
      setMenu(true);
    } else {
      setMenu(false);
    };
  };

  return ( 
    <div className="header-menu" onClick={openMenu}>
      {!menu && <img className="header-menu-toggle" src={HamburgerMenu} alt="Open the menu" />}
      {menu &&
      <>
        <img className="header-menu-toggle" src={CloseMenu} alt="Close the menu" />
        <div className="header-menu-nav">
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
      </>
      }
    </div>
  );
}
 
export default Menu;