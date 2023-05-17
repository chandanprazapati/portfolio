import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Qualification.css";
import { HiAcademicCap } from "react-icons/hi2";
import { MdWorkHistory } from "react-icons/md";
import Qedu from "../Qworkdata/Qedu";
import Qwork from "../Qworkdata/Qwork";

const Qualification = () => {
  const [key, setKey] = useState("Education");

  return (
    <div className="qualification">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab
          eventKey="Education"
          title={
            <>
              <HiAcademicCap /> Education
            </>
          }
        >
          <Qedu />
        </Tab>
        <Tab
          eventKey="Work"
          title={
            <>
              <MdWorkHistory /> Work
            </>
          }
        >
          <Qwork />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Qualification;
