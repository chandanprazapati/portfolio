import React from "react";
import "./services.css";
import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from "../Cards/Card";
import Resume from "./Resume.pdf";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="services" id="Services">
      {/*left side*/}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Dolor eos sed rebum kasd kasd aliquyam amet, consetetur takimata
          eirmod amet duo.
          <br />
          Stet accusam vero sed sed dolor, aliquyam sanctus sit est, et eos.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/*right side*/}
      <div className="cards">
        <motion.div
          initial={{ left: "25%" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ top: "0rem", left: "18rem" }}
        >
          <Card
            emoji={heartemoji}
            title={"Design"}
            desc={"Figma, ADobe, photoshop"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "30%" }}
          whileInView={{ left: "-8rem" }}
          transition={transition}
          style={{ top: "11rem", left: "-5rem" }}
        >
          <Card
            emoji={glasses}
            title={"Developer"}
            desc={
              "Html5, CSS3, JavaScript, React-Framework, GitHub, JQuery, scss"
            }
          />
        </motion.div>
        <motion.div
          initial={{ left: "2rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={humble}
            title={"UI/UX"}
            desc={"Figma, ADobe, photoshop"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
