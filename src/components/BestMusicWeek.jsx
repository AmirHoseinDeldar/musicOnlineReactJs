import React from 'react';

import week1 from '../assets/images/weekly/song1.jpg';
import week2 from '../assets/images/weekly/song2.jpg';
import week3 from '../assets/images/weekly/song3.jpg';
import week4 from '../assets/images/weekly/song4.jpg';
import week5 from '../assets/images/weekly/song5.jpg';
import week6 from '../assets/images/weekly/song6.jpg';
import week7 from '../assets/images/weekly/song7.jpg';
import week8 from '../assets/images/weekly/song8.jpg';
import week9 from '../assets/images/weekly/song9.jpg';
import week11 from '../assets/images/weekly/song11.jpg';
import week12 from '../assets/images/weekly/song12.jpg';
import week13 from '../assets/images/weekly/song13.jpg';
import week14 from '../assets/images/weekly/song14.jpg';
import Weekly from './Weekly';

const BestMusicWeek = () => {
  return (
    <div className='sm:hidden m:hidden '>
      <div className=' flex justify-end mx-28  text-lg sm:justify-center gap-96  text-white'>
        <h1 style={{ color: ' #3bc8e7' }}>آخرین بازدیدها</h1>
      </div>
      <br />
      <br />
      <div
        className='flex justify-between xl:content-between   flex-wrap gap-10 text-white'
        style={{ width: '98.2%' }}
        dir='rtl'
      >
        <Weekly week={week1} index={'01'} />
        <Weekly week={week2} index={'02'} />
        <Weekly week={week3} index={'03'} />
        <Weekly week={week4} index={'04'} />
        <Weekly week={week5} index={'05'} />
        <Weekly week={week6} index={'06'} />
        <Weekly week={week7} index={'07'} />
        <Weekly week={week8} index={'08'} />
        <Weekly week={week9} index={'09'} />
        <Weekly week={week11} index={'10'} />
        <Weekly week={week12} index={'11'} />
        <Weekly week={week13} index={'12'} />
      </div>
    </div>
  );
};

export default BestMusicWeek;
