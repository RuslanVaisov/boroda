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
            Кто не знает, меня зовут Олег, основная рабочая деятельность -
            барберинг, другими словами я Парикмахер, Цирюльник, как говорили в
            древности, или просто стилист универсал.
            <span role="img" aria-label="barbershop">
              💈⚔️💈
            </span>
            <br />
            Начал работать с 2008 года , а значит уже больше 10 лет в деле.
            Девушки не бойтесь с дамами я тоже работаю, единственное не люблю
            делать прически. <br />
            Ездил на мастер классы в Алма-Ату и Объединённые Арабские Эмираты.
            Где получил хороший опыт именно по бритью и уходом за Бородой.
            <br /> <br />
            Наверное спросите почему именно Барбер ?
            <span role="img" aria-label="barber-scissors">
              ✂️
            </span>
            <br />
            Мне безумно нравится реакция моих гостей, после проделанной работы,
            когда они говорят: «именно то, что хотел» Довольные делают селфи и с
            хорошим настроением продолжают путь. Да и с другой стороны мне нужно
            куда-то девать энергию, так что сидячий образ жизни не про меня.
            <br /> <br />
            Помимо работы , большую часть моей жизни занимают танцы . Я вхожу в
            состав команды Funky Sketchers. Преподаю такой стиль как DanceHall.
            На данный момент многие мои ученики преподают как у нас в городе ,
            так и в других странах.
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
