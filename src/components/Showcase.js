import React from "react";
import "../assets/Showcase.scss";
import shadow from "../img/showcase-shadow.png";
// import scroll from "../img/scroll.gif";

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="container">
        <div className="showcase-content">
          <div className="showcase-shadow">
            <img src={shadow} width={"250%"} alt="барбер в ташкенте" />
          </div>
          {/* <div className="showcase-scroll">
              <img src={scroll} alt="скрол вниз" />
            </div> */}
          <div className="showcase-appointment">
            <a
              href="https://t.me/oleg_suz"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              — ЗАПИСАТЬСЯ —{" "}
            </a>
          </div>
          <div className="showcase-bottom">
            <div className="showcase-left">
              <img src={shadow} width={"65px"} alt="барберская иконка" />
              <h1>
                Лучшее место <br /> для ваших волос <br /> в вашем городе.
              </h1>
            </div>
            <div className="showcase-right">
              <div className="showcase-contact">
                <p>Ташкент, Чехов 38</p>
                <p>(90) 986 76 74</p>
              </div>
              <div className="showcase-social-media">
                <a
                  href="https://www.facebook.com/olejka.fs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/oleg_suz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://t.me/oleg_suz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
