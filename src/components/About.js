import React from "react";
import "../assets/About.scss";
import boroda from "../img/boroda.png";
import oleg from "../img/oleg.png";
import abouText from "../img/about-text.png";

const About = () => {
  return (
    <section className="about">
      <div className="about-top">
        <div className="about-info-black">
          <div>
            <img src={boroda} alt="Олег Суслов" />
          </div>

          <h1>Обо мне</h1>
        </div>
      </div>
      <div className="about-main">
        <div className="about-info">
          <h2>
            <img src={abouText} alt="Олег Суслов" />
          </h2>
          <p>
            Занимаюсь своим делом херово туча лет. Умею это, вот это и вон то.
            Дохера клиентов. Хочешь норм волосы, не проблема сделаем. Тут еще
            немного текста обо мне чтобы было интереснее. А вот тут последнее
            предложение.
          </p>
        </div>
        <div className="about-photo">
          <img src={oleg} alt="Олег Суслов" />
        </div>
      </div>
    </section>
  );
};

export default About;
