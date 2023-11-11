import { useState } from "react";
import { Link } from "react-router-dom";
import logoCoffeeroasters from "../assets/shared/desktop/logo.svg";
import Menu from "../components/Menu";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="header container">
      <Link to="/" aria-label="Link to the homepage">
        <img
          className="header-logo"
          src={logoCoffeeroasters}
          alt="coffeeroasters"
        />
      </Link>
      <img src="" alt="" />
      <nav className="nav-desktop">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CREATE YOUR PLAN</li>
        </ul>
      </nav>
      <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </header>
  );
};

export default Header;
