import propTypes from "prop-types";
import closeIcon from "../assets/shared/mobile/icon-close.svg";
import openIcon from "../assets/shared/mobile/icon-hamburger.svg";

const Menu = ({ toggleMenu, setToggleMenu }) => {
  const openMenu = () => {
    setToggleMenu((prevMenu) => !prevMenu);
  };

  return (
    <div className="header-menu">
      <img
        src={toggleMenu ? closeIcon : openIcon}
        alt={toggleMenu ? "Close the menu" : "Open the menu"}
        onClick={openMenu}
      />

      <div className="nav">
        <ul className="nav-list">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CREATE YOUR PLAN</li>
        </ul>
      </div>
    </div>
  );
};

Menu.propTypes = {
  toggleMenu: propTypes.bool,
  setToggleMenu: propTypes.func,
};

export default Menu;
