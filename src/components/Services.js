import React from "react";
import "../assets/Services.scss";
import servicesCenter from "../img/services-center.png";
import video from "../img/video/services-video.mp4";
import man from "../img/man.png";

const Services = () => {
  return (
    <section className="services">
      <div className="services-top"></div>
      <div className="services-center">
        <img src={servicesCenter} alt="услуги" />

        <video
          loop
          autoPlay
          width={"640px"}
          height={"360px"}
          type={"video/mp4"}
          src={video}
        ></video>
      </div>
      <div className="services-bottom">
        <ul>
          <li>
            Такая то крутая стрижка . . . . . . . . . . . . . . . . . . . . . .
            . . .<span>80,000</span>
          </li>
          <li>
            Крутая стрижка №2 . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . <span>80,000</span>
          </li>
          <li>
            Очередная топ стрижка . . . . . . . . . . . . . . . . . . . . . . .
            . <span>80,000</span>
          </li>
          <li>
            Еще крутая стрижка . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . .<span>80,000</span>
          </li>
          <li>
            Мощщщщная стрижка . . . . . . . . . . . . . . . . . . . . . . . . .
            . <span>80,000</span>
          </li>
          <li>
            Огонь стрижка . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . <span>80,000</span>
          </li>
        </ul>
        <ul>
          <li>
            Такая то крутая стрижка . . . . . . . . . . . . . . . . . . . . . .
            . . .<span>80,000</span>
          </li>
          <li>
            Крутая стрижка №2 . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . <span>80,000</span>
          </li>
          <li>
            Очередная топ стрижка . . . . . . . . . . . . . . . . . . . . . . .
            . <span>80,000</span>
          </li>
          <li>
            Еще крутая стрижка . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . .<span>80,000</span>
          </li>
          <li>
            Мощщщщная стрижка . . . . . . . . . . . . . . . . . . . . . . . . .
            . <span>80,000</span>
          </li>
          <li>
            Огонь стрижка . . . . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . <span>80,000</span>
          </li>
        </ul>
        <ul className="services-table"></ul>
      </div>
      <div className="services-man">
        <img src={man} alt="" />
      </div>
    </section>
  );
};

export default Services;
