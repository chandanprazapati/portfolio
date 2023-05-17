import React from "react";
import "./Skills.css";
import { BsBraces } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { BiServer } from "react-icons/bi";
import { HiSwatch } from "react-icons/hi2";
import { useState } from "react";
import { useContext } from "react";
import { themeContext } from "../../Them";

const Skills = () => {
  const [isFrontendOpen, setIsFrontendOpen] = useState(true);
  const [isBackendOpen, setIsBackendOpen] = useState(false);
  const [isDesignerOpen, setIsDesignerOpen] = useState(false);

  const toggleFrontend = () => setIsFrontendOpen(!isFrontendOpen);
  const toggleBackend = () => setIsBackendOpen(!isBackendOpen);
  const toggleDesigner = () => setIsDesignerOpen(!isDesignerOpen);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="skills container" id="Skills">
      <span style={{ color: darkMode ? "white" : "" }}>Skills</span>
      <span>My Technical Level</span>
      <div className="skill-container">
        <div>
          {/*skill list 1*/}
          <div
            className={`skill-content ${
              isFrontendOpen ? "skill-open" : "skill-close"
            }`}
          >
            <div className="skill-header" onClick={toggleFrontend}>
              <BsBraces className="skill-icon" />
              <div className="skill-titles">
                <span className="s-title">Frontend Developer</span>
                <span>More than 1 years</span>
              </div>
              <AiOutlineDown className="skill-arrow" />
            </div>
            <div className="skill-list">
              <div className="skill-data">
                <div className="skill-title">
                  <span className="s-title">HTML</span>
                  <span className="s-subtitle">90%</span>
                </div>
                <div className="skill-bar">
                  <span className="skill-pergentage html-skill"></span>
                </div>
              </div>
              <div className="skill-data">
                <div className="skill-title">
                  <span className="s-title">CSS</span>
                  <span className="s-subtitle">80%</span>
                </div>
                <div className="skill-bar">
                  <span className="skill-pergentage css-skill"></span>
                </div>
              </div>
              <div className="skill-data">
                <div className="skill-title">
                  <span className="s-title">JavaScript</span>
                  <span className="s-subtitle">70%</span>
                </div>
                <div className="skill-bar">
                  <span className="skill-pergentage js-skill"></span>
                </div>
              </div>
              <div className="skill-data">
                <div className="skill-title">
                  <span className="s-title">React</span>
                  <span className="s-subtitle">85%</span>
                </div>
                <div className="skill-bar">
                  <span className="skill-pergentage react-skill"></span>
                </div>
              </div>
            </div>
          </div>
          {/*skill list 2*/}
          <div
            className={`skill-content ${
              isBackendOpen ? "skill-open" : "skill-close"
            }`}
          >
            <div className="skill-header" onClick={toggleBackend}>
              <BiServer className="skill-icon" />
              <div className="skill-titles">
                <span className="s-title">Backend Developer</span>
                <span className="s-subtitle">Basic Experiences</span>
              </div>
              <AiOutlineDown className="skill-arrow" />
            </div>
            <div className="skill-list">
              <div className="skill-data">
                <div className="skill-title">
                  <span className="s-title">PHP</span>
                  <span className="s-subtitle">50%</span>
                </div>
                <div className="skill-bar">
                  <span className="skill-pergentage php-skill"></span>
                </div>
              </div>
              <div className="skill-data">
                <div className="skill-title">
                  <span className="s-title">MySql</span>
                  <span className="s-subtitle">60%</span>
                </div>
                <div className="skill-bar">
                  <span className="skill-pergentage mysql-skill"></span>
                </div>
              </div>
              <div className="skill-data">
                <div className="skill-title">
                  <span className="s-title">Python</span>
                  <span className="s-subtitle">60%</span>
                </div>
                <div className="skill-bar">
                  <span className="skill-pergentage python-skill"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/*skill list 3*/}
          <div
            className={`skill-content ${
              isDesignerOpen ? "skill-open" : "skill-close"
            }`}
          >
            <div className="skill-header" onClick={toggleDesigner}>
              <HiSwatch className="skill-icon" />
              <div className="skill-titles">
                <span className="s-title">Designer</span>
                <span className="s-subtitle">more than 1 years</span>
              </div>
              <AiOutlineDown className="skill-arrow" />
            </div>
            <div className="skill-list">
              <div className="skill-data">
                <div className="skill-title">
                  <span className="s-title">Figma</span>
                  <span className="s-subtitle">70%</span>
                </div>
                <div className="skill-bar">
                  <span className="skill-pergentage figma-skill"></span>
                </div>
              </div>
              <div className="skill-data">
                <div className="skill-title">
                  <span className="s-title">Photoshop</span>
                  <span className="s-subtitle">50%</span>
                </div>
                <div className="skill-bar">
                  <span className="skill-pergentage phs-skill"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="blur skills-blur"
        style={{ background: "#abf1ff94" }}
      ></div>
    </div>
  );
};

export default Skills;
