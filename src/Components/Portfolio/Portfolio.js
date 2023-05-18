import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Crypto from "../../img/crypto.png";
import Redux from "../../img/redux_e-commerse.png";
import Ngo from "../../img/ngo.png";
import Tourism from "../../img/tourism.png";
import "./Portfolio.css";

const Portfolio = () => {
  const handleClick = () => {
    window.open("//github.com/chandanprazapati/");
  };
  const tourismClick = () => {
    window.open("https://hotelbookingsystem.netlify.app/");
  };
  return (
    <div className="portfolio" id="Portfolio">
      {/*hader part of portfolio */}
      <span>Recent Project</span>
      <span>Portfolio</span>
      {/* portfolio slider*/}
      <Swiper
        spaceBetween={58}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Crypto} alt="" style={{ height: "12rem" }} />
          <button onClick={handleClick} className="button p-button">
            Demo
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Tourism} alt="" />
          <button onClick={tourismClick} className="button p-button">
            Demo
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Redux} alt="" />
          <button onClick={handleClick} className="button p-button">
            Demo
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ngo} alt="" />
          <button onClick={handleClick} className="button p-button">
            Demo
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
