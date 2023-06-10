import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import singer2 from '../assets/images/artist/artist1.jpg';
import singer3 from '../assets/images/artist/artist2.jpg';
import singer4 from '../assets/images/artist/artist3.jpg';
import singer5 from '../assets/images/artist/artist4.jpg';
import singer6 from '../assets/images/artist/artist5.jpg';
import singer7 from '../assets/images/artist/artist6.jpg';

const BestSinger = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
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
        <h1 style={{ color: ' #3bc8e7' }}>خوانندگان برتر</h1>
      </div>
      <br />

      <div style={{ margin: '0 auto' }} className='w-11/12 sm:w-3/5 text-white'>
        <Slider {...settings}>
          <div>
            <img style={{ width: '80%' }} src={singer2} alt='' />
            <h1 className='text-right mr-24 mt-3 font-bold '> Ava Cornish</h1>
          </div>
          <div>
            <img style={{ width: '80%' }} src={singer3} alt='' />
            <h1 className='text-right mr-24 mt-3 font-bold'>Ava Cornish </h1>
          </div>
          <div>
            <img style={{ width: '80%' }} src={singer4} alt='' />
            <h1 className='text-right mr-24 mt-3 font-bold'>
              Dark Alley Acoustic
            </h1>
          </div>
          <div>
            <img style={{ width: '80%' }} src={singer5} alt='' />
            <h1 className='text-right mr-24 mt-3 font-bold'>Until I Met You</h1>
          </div>
          <div>
            <img style={{ width: '80%' }} src={singer6} alt='' />
            <h1 className='text-right mr-24 mt-3 font-bold '>
              Gimme Some Courage
            </h1>
          </div>{' '}
          <div>
            <img style={{ width: '80%' }} src={singer7} alt='' />
            <h1 className='text-right mr-24 mt-3 font-bold '>
              Gimme Some Courage
            </h1>
          </div>{' '}
        </Slider>
      </div>
    </div>
  );
};

export default BestSinger;
