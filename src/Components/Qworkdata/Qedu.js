import React from "react";
import { BsCalendarDateFill } from "react-icons/bs";
import "./Qedu.css";

const Qedu = () => {
  return (
    <>
      {/* qualification container */}
      <div className="quali-content">
        {/* qualification data1 */}
        <div className="quali-data">
          <h5> Computer Science and Information Technology</h5>
          <span> University of Bedfordshire</span>
          <div className="calander-date">
            <BsCalendarDateFill style={{ marginRight: "8px" }} />
            2019 - 2022
          </div>
        </div>
        {/* qualification data2 */}
        <div className="quali-data">
          <h5> Website Design and Development</h5>
          <span> Broadway Infosys</span>
          <div className="calander-date">
            <BsCalendarDateFill style={{ marginRight: "8px" }} />
            2021 - 2022
          </div>
        </div>
        {/* qualification data3 */}
        <div className="quali-data">
          <h5> 10+2 (Science Stream)</h5>
          <span> Capital collage and research center</span>
          <div className="calander-date">
            <BsCalendarDateFill style={{ marginRight: "8px" }} />
            2015 - 2017
          </div>
        </div>
        {/* qualification data4 */}
        <div className="quali-data">
          <h5> SLC Board</h5>
          <span> Siddharth ShishuSadan B.school </span>
          <div className="calander-date">
            <BsCalendarDateFill style={{ marginRight: "8px" }} />
            2013 - 2014
          </div>
        </div>
      </div>
    </>
  );
};

export default Qedu;
