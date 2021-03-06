import React from 'react';
import blade from '../img/blade.png';
import scissors from '../img/scissors.png';
import boroda from '../img/boroda.png';
import compass from '../img/compass.png';
import logo from '../img/logo.png';
import '../assets/Navbar.scss';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <ul className='nav-content'>
          <li className='nav-secondary'>
            <Link
              activeClass='active'
              to='services'
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <div className='nav-img'>
                <img src={blade} alt='Главная' />
              </div>
              <p>Услуги</p>
            </Link>
          </li>
          <li className='nav-secondary'>
            <Link
              to='about'
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={1000}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <div className='nav-img'>
                <img src={boroda} alt='Услуги' />
              </div>
              <p>Обо мне</p>
            </Link>
          </li>
          <li>
            <div className='nav-img nav-logo'>
              <img src={logo} width={'100%'} alt='Лого' />
            </div>
          </li>
          <li className='nav-secondary'>
            <Link
              to='instagram'
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={1500}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <div className='nav-img'>
                <img src={scissors} alt='Обо мне' />
              </div>
              <p>Галерея</p>
            </Link>
          </li>
          <li className='nav-secondary'>
            <Link
              to='footer'
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={2000}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <div className='nav-img'>
                <img src={compass} alt='Контакты' />
              </div>
              <p>Контакты</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
