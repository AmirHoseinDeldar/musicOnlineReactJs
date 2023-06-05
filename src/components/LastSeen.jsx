import { React, useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/images/music/r_music1.jpg';
import img2 from '../assets/images/music/r_music2.jpg';
import img3 from '../assets/images/music/r_music3.jpg';
import img4 from '../assets/images/music/r_music4.jpg';
import img5 from '../assets/images/music/r_music5.jpg';
import img6 from '../assets/images/music/r_music6.jpg';

const LastSeen = () => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className='flex justify-between  sm:justify-center mx-28 text-lg  text-white'>
        <span className='sm:hidden'>
          <a href=''>مشاهده بیشتر</a>
        </span>
        <h1 style={{ color: ' #3bc8e7' }}>آخرین بازدیدها</h1>
      </div>
      <br />

      <div style={{ margin: '0 auto' }} className='w-11/12 sm:w-3/5 text-white'>
        <Slider {...settings}>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img style={{ width: '80% ' }} src={img1} alt='' />
            <h1 className='text-right mr-24 mt-3 font-bold  '>
              Dream Your Moments (Duet)
            </h1>
            <h5 className='text-right mr-24 mt-3 text-sm '>
              Ava Cornish & Brian Hill
            </h5>
          </div>
          <div>
            <img style={{ width: '80%' }} src={img2} alt='' />
            <h1 className='text-right mr-24 mt-3 font-bold '>Desired Games</h1>
            <h5 className='text-right mr-24 mt-3 text-sm '>
              Ava Cornish & Brian Hill
            </h5>
          </div>
          <div>
            <img style={{ width: '80%' }} src={img3} alt='' />
            <h1 className='text-right mr-24 mt-3 font-bold'>
              Walking Promises
            </h1>
            <h5 className='text-right mr-24 mt-3 text-sm '>
              Ava Cornish & Brian Hill
            </h5>
          </div>
          <div>
            <img style={{ width: '80%' }} src={img4} alt='' />
            <h1 className='text-right mr-24 mt-3 font-bold'>
              Dark Alley Acoustic
            </h1>
            <h5 className='text-right mr-24 mt-3 text-sm '>
              Ava Cornish & Brian Hill
            </h5>
          </div>
          <div>
            <img style={{ width: '80%' }} src={img5} alt='' />
            <h1 className='text-right mr-24 mt-3 font-bold'>Until I Met You</h1>
            <h5 className='text-right mr-24 mt-3 text-sm '>
              Ava Cornish & Brian Hill
            </h5>
          </div>
          <div>
            <img style={{ width: '80%' }} src={img6} alt='' />
            <h1 className='text-right mr-24 mt-3 font-bold '>
              Gimme Some Courage
            </h1>
            <h5 className='text-right mr-24 mt-3 text-sm '>
              Ava Cornish & Brian Hill
            </h5>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LastSeen;
