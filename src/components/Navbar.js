import React from "react";
import blade from "../img/blade.png";
import scissors from "../img/scissors.png";
import boroda from "../img/boroda.png";
import compass from "../img/compass.png";
import logo from "../img/logo.png";
import "../assets/Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <ul className="nav-content">
          <li>
            <a className="active" href="/">
              <div className="nav-img">
                <img src={blade} alt="Главная" />
              </div>
              <p>Главная</p>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="nav-img">
                <img src={scissors} alt="Услуги" />
              </div>
              <p>Услуги</p>
            </a>
          </li>
          <li>
            <div className="nav-img nav-logo">
              <img src={logo} width={"100%"} alt="Лого" />
            </div>
          </li>
          <li>
            <a href="/">
              <div className="nav-img">
                <img src={boroda} alt="Обо мне" />
              </div>
              <p>Обо мне</p>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="nav-img">
                <img src={compass} alt="Контакты" />
              </div>
              <p>Контакты</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
