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
        <img
          className="services-center-left"
          src={servicesCenter}
          alt="услуги"
        />
        <video
          className="services-center-right"
          playsInline
          loop
          autoPlay
          muted
          width={"640px"}
          height={"360px"}
          type={"video/mp4"}
          src={video}
        ></video>
      </div>
      <div className="services-bottom">
        <ul>
          <li>
            Cтрижка . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            <span>100,000</span>
          </li>
          <li>
            Стрижка до 8 лет . . . . . . . . . . . . . . . . . . . . . .
            <span>80,000</span>
          </li>
          <li>
            Стрижка и моделирование бороды . . . . .<span>60,000</span>
          </li>
          <li>
            Тонирование бороды . . . . . . . . . . . . . . . . . .
            <span>60,000</span>
          </li>
          <li>
            Бритье . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
            <span>100,000</span>
          </li>
        </ul>
        <ul>
          <li>
            Массаж головы . . . . . . . . . . . . . . . . . . . . . . .
            <span>50,000</span>
          </li>
          <li>
            Пилинг лица . . . . . . . . . . . . . . . . . . . . . . . . . .
            <span>40,000</span>
          </li>
          <li>
            Чистка лица и уход . . . . . . . . . . . . . . . . . . . .
            <span>60,000</span>
          </li>
          <li>
            Окрашивание . . . . . . . . . . . . . . . . . . . . . .
            <span>от 100,000</span>
          </li>
        </ul>
      </div>
      <div className="services-man">
        <img src={man} alt="" />
      </div>
    </section>
  );
};

export default Services;
