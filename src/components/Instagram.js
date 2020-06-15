import React from "react";
import "../assets/Instagram.scss";
import instagram1 from "../img/instagram/1.jpg";
import instagram2 from "../img/instagram/2.jpg";
import instagram3 from "../img/instagram/3.jpg";
import instagram4 from "../img/instagram/4.jpg";
import instagram5 from "../img/instagram/5.jpg";
import instagram6 from "../img/instagram/6.jpg";
import instagram7 from "../img/instagram/7.jpg";
import instagram8 from "../img/instagram/8.jpg";
import instagram9 from "../img/instagram/9.jpg";
import instagram10 from "../img/instagram/10.jpg";
import instagram11 from "../img/instagram/11.jpg";
import instagram12 from "../img/instagram/12.jpg";
import instagram13 from "../img/instagram/13.jpg";
import instagram14 from "../img/instagram/14.jpg";
import instagram15 from "../img/instagram/15.jpg";

const Instagram = () => {
  return (
    <section className="instagram">
      <div className="instagram-text">
        Перейти в{" "}
        <a
          href="https://www.instagram.com/oleg_suz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram{" "}
        </a>
      </div>
      <div className="instagram-content">
        <div>
          <img src={instagram1} alt="Инстаграм" />
        </div>
        <div>
          <img src={instagram2} alt="Инстаграм" />
        </div>
        <div>
          <img src={instagram3} alt="Инстаграм" />
        </div>
        <div>
          <img src={instagram4} alt="Инстаграм" />
        </div>
        <div>
          <img src={instagram5} alt="Инстаграм" />
        </div>
        <div>
          <img src={instagram6} alt="Инстаграм" />
        </div>
        <div>
          <img src={instagram7} alt="Инстаграм" />
        </div>
        <div>
          <img src={instagram8} alt="Инстаграм" />
        </div>
        <div>
          <img src={instagram9} alt="Инстаграм" />
        </div>
        <div>
          <img src={instagram10} alt="Инстаграм" />
        </div>
        <div>
          <img src={instagram11} alt="Инстаграм" />
        </div>
        <div>
          <img src={instagram12} alt="Инстаграм" />
        </div>
        <div>
          <img src={instagram13} alt="Инстаграм" />
        </div>
        <div>
          <img src={instagram14} alt="Инстаграм" />
        </div>
        <div>
          <img src={instagram15} alt="Инстаграм" />
        </div>
      </div>
    </section>
  );
};

export default Instagram;
