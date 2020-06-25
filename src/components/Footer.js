import React from 'react';
import '../assets/Footer.scss';
import map from '../img/map.jpg';
import compass from '../img/compass-black.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <div className='footer-compass'>
            <img src={compass} alt='компас' />
          </div>
          <div className='footer-contacts'>
            <h1>Контакты</h1>
            <h1>
              <a href='tel:+998909867674'>+998909867674</a>
            </h1>
          </div>
          <div className='footer-social-media'>
            <a
              href='https://www.facebook.com/olejka.fs'
              target='_blank'
              rel='noopener noreferrer'
            >
              Facebook
            </a>
            <a
              href='https://www.instagram.com/oleg_suz/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Instagram
            </a>
            <a
              href='https://t.me/oleg_suz'
              target='_blank'
              rel='noopener noreferrer'
            >
              Telegram
            </a>
          </div>
        </div>
        <div className='footer-top-right'>
          <img src={map} width={'80%'} alt='карта' />
        </div>
      </div>
      <div className='footer-bottom'>
        <p>© 2020</p>
        <p>
          Дизайн и разработка студии{' '}
          <a href='http://aiso.uz/' target='_blank' rel='noopener noreferrer'>
            Aiso
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
