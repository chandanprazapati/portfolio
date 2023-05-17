import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy2 from "../../img/boy2.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import Floating from "../FloatingDiv/Floating";
import { useContext } from "react";
import { themeContext } from "../../Them";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };

  const handleInstaClick = () => {
    window.open("https://www.instagram.com/chandan234s/");
  };

  const handleLinkedClick = () => {
    window.open("//www.linkedin.com/in/chandan-prazapati-00a477235/");
  };
  const handleGithubClick = () => {
    window.open("//github.com/chandanprazapati");
  };

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>HY! I Am</span>
          <span>Chandan Prazapati</span>
          <span style={{ color: darkMode ? "white" : "" }}>
            Frontend Developer with high level of experience in Web Designing
            and Development, producing the Quality Work
          </span>
        </div>
        <Link to="Contact" spy={true} smooth={true}>
          <button className="button i-button">Hire Me</button>
        </Link>
        <div className="i-icons">
          <img src={Github} alt="" onClick={handleGithubClick} />
          <img src={Linkedin} alt="" onClick={handleLinkedClick} />
          <img src={Instagram} alt="" onClick={handleInstaClick} />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy2} alt="" />
        <motion.img
          initial={{ left: "-40%" }}
          whileInView={{ left: "-20%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-5", left: "78%" }}
          whileInView={{ left: "65%" }}
          transition={transition}
          style={{ left: "67%", top: "6%" }}
          className="floating-div"
        >
          <Floating image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "23rem", left: "0rem" }}
          className="floating-div"
        >
          <Floating image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        {/* Blur Divs */}
        <div
          className="blur"
          style={{ background: "rgb(238, 210, 255)" }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            width: "21rem",
            height: "11rem",
            top: "17rem",
            left: "-20%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
