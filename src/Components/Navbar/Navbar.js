import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { useContext } from "react";
import { themeContext } from "../../Them";
import { Link } from "react-scroll";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name" style={{ color: darkMode ? "white" : "" }}>
          WebDev
        </div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyle: "none" }}>
            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
              <li style={{ color: darkMode ? "white" : "" }}> Home</li>
            </Link>
            <Link to="Skills" spy={true} smooth={true} duration={50}>
              <li style={{ color: darkMode ? "white" : "" }}>Skills</li>
            </Link>
            <Link to="Services" spy={true} smooth={true} duration={50}>
              <li style={{ color: darkMode ? "white" : "" }}>Services</li>
            </Link>

            <Link to="Portfolio" spy={true} smooth={true} duration={50}>
              <li style={{ color: darkMode ? "white" : "" }}>Portfolio</li>
            </Link>
            <Link to="Contact" spy={true} smooth={true} duration={50}>
              <li style={{ color: darkMode ? "white" : "" }}>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link to="Contact" spy={true} smooth={true} duration={50} delay={100}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
