import React from 'react';
import '../assets/Instagram.scss';

import { SRLWrapper } from 'simple-react-lightbox';

const Instagram = ({ imgs }) => {
  const options = {
    settings: {
      autoplaySpeed: 1500,
      transitionSpeed: 900,
    },
    buttons: {
      showDownloadButton: false,
      showAutoplayButton: false,
      showThumbnailsButton: false,
      showFullscreenButton: false,
    },
    caption: {
      showCaption: false,
    },
  };

  return (
    <section className='instagram'>
      <h1>Галерея</h1>
      <SRLWrapper options={options}>
        <div className='instagram-content'>
          {imgs.map((img) => (
            <div key={img}>
              <img src={img} alt='' />
            </div>
          ))}
        </div>
      </SRLWrapper>
    </section>
  );
};

export default Instagram;
