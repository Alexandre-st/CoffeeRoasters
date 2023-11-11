import { motion } from "framer-motion";
import propTypes from "prop-types";
import closeIcon from "../assets/shared/mobile/icon-close.svg";
import openIcon from "../assets/shared/mobile/icon-hamburger.svg";
import { background, fadeIn } from "../utils/motion";

const Menu = ({ toggleMenu, setToggleMenu }) => {
  const openMenu = () => {
    setToggleMenu((prevMenu) => !prevMenu);
  };

  return (
    <div className="header-menu">
        <img
          onClick={openMenu}
          src={toggleMenu ? closeIcon : openIcon}
          alt={toggleMenu ? "Close the menu" : "Open the menu"}
        />
      <motion.nav
        className="nav"
        initial="initial"
        animate={toggleMenu ? "open" : "closed"}
        variants={background}
      >
        <motion.ul className="nav-list">
          <motion.li
            initial
            animate={toggleMenu ? "open" : "initial"}
            variants={fadeIn(0.3)}
          >
            Home
          </motion.li>
          <motion.li
            initial
            animate={toggleMenu ? "open" : "initial"}
            variants={fadeIn(0.4)}
          >
            About Us
          </motion.li>
          <motion.li
            initial
            animate={toggleMenu ? "open" : "initial"}
            variants={fadeIn(0.5)}
          >
            Create Your Plan
          </motion.li>
        </motion.ul>
      </motion.nav>
    </div>
  );
};

Menu.propTypes = {
  toggleMenu: propTypes.bool,
  setToggleMenu: propTypes.func,
};

export default Menu;
