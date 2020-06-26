import React from 'react';
import '../assets/Pagination.scss';

const Pagination = ({ imgsPerPage, totalImgs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalImgs / imgsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <section className='pagination-container'>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='#!' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
      <div className='instagram-text'>
        Перейти в{' '}
        <a
          href='https://www.instagram.com/oleg_suz/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Instagram{' '}
        </a>
      </div>
    </section>
  );
};

export default Pagination;
