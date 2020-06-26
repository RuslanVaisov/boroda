import React, { useState } from 'react';
import Instagram from './Instagram';
import SimpleReactLightbox from 'simple-react-lightbox';

import instagram1 from '../img/instagram/1.jpg';
import instagram2 from '../img/instagram/2.jpg';
import instagram3 from '../img/instagram/3.jpg';
import instagram4 from '../img/instagram/4.jpg';
import instagram5 from '../img/instagram/5.jpg';
import instagram6 from '../img/instagram/6.jpg';
import instagram7 from '../img/instagram/7.jpg';
import instagram8 from '../img/instagram/8.jpg';
import instagram9 from '../img/instagram/9.jpg';
import instagram10 from '../img/instagram/10.jpg';
import instagram11 from '../img/instagram/11.jpg';
import instagram12 from '../img/instagram/12.jpg';
import instagram13 from '../img/instagram/13.jpg';
import instagram14 from '../img/instagram/14.jpg';
import instagram15 from '../img/instagram/15.jpg';
import instagram16 from '../img/instagram/16.jpg';
import instagram17 from '../img/instagram/17.jpg';
import instagram18 from '../img/instagram/18.jpg';
import instagram19 from '../img/instagram/19.jpg';
import instagram20 from '../img/instagram/20.jpg';
import instagram21 from '../img/instagram/21.jpg';
import instagram22 from '../img/instagram/22.jpg';
import instagram23 from '../img/instagram/23.jpg';
import instagram24 from '../img/instagram/24.jpg';
import instagram25 from '../img/instagram/25.jpg';
import instagram26 from '../img/instagram/26.jpg';
import instagram27 from '../img/instagram/27.jpg';
import instagram28 from '../img/instagram/28.jpg';
import instagram29 from '../img/instagram/29.jpg';
import instagram30 from '../img/instagram/30.jpg';
import instagram31 from '../img/instagram/31.jpg';
import instagram32 from '../img/instagram/32.jpg';
import instagram33 from '../img/instagram/33.jpg';
import instagram34 from '../img/instagram/34.jpg';
import instagram35 from '../img/instagram/35.jpg';
import instagram36 from '../img/instagram/36.jpg';
import instagram37 from '../img/instagram/37.jpg';
import instagram38 from '../img/instagram/38.jpg';
import instagram39 from '../img/instagram/39.jpg';
import instagram40 from '../img/instagram/40.jpg';
import instagram41 from '../img/instagram/41.jpg';
import instagram42 from '../img/instagram/42.jpg';
import instagram43 from '../img/instagram/43.jpg';
import instagram44 from '../img/instagram/44.jpg';
import instagram45 from '../img/instagram/45.jpg';
import instagram46 from '../img/instagram/46.jpg';
import instagram47 from '../img/instagram/47.jpg';
import instagram48 from '../img/instagram/48.jpg';
import instagram49 from '../img/instagram/49.jpg';
import Pagination from './Pagination';

const PageGallery = () => {
  const imgs = [
    instagram1,
    instagram2,
    instagram3,
    instagram4,
    instagram5,
    instagram6,
    instagram7,
    instagram8,
    instagram9,
    instagram10,
    instagram11,
    instagram12,
    instagram13,
    instagram14,
    instagram15,
    instagram16,
    instagram17,
    instagram18,
    instagram19,
    instagram20,
    instagram21,
    instagram22,
    instagram23,
    instagram24,
    instagram25,
    instagram26,
    instagram27,
    instagram28,
    instagram29,
    instagram30,
    instagram31,
    instagram32,
    instagram33,
    instagram34,
    instagram35,
    instagram36,
    instagram37,
    instagram38,
    instagram39,
    instagram40,
    instagram41,
    instagram42,
    instagram43,
    instagram44,
    instagram45,
    instagram46,
    instagram47,
    instagram48,
    instagram49,
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [imgsPerPage] = useState(12);

  //   get current imgs

  const indexOfLastImg = currentPage * imgsPerPage;
  const indexOfFirstImg = indexOfLastImg - imgsPerPage;
  const currentImgs = imgs.slice(indexOfFirstImg, indexOfLastImg);

  //   change page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <SimpleReactLightbox>
        <Instagram imgs={currentImgs} />
      </SimpleReactLightbox>
      <Pagination
        imgsPerPage={imgsPerPage}
        totalImgs={imgs.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PageGallery;
