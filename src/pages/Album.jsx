import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/images/album/album1.jpg';
import img2 from '../assets/images/album/album2.jpg';
import img3 from '../assets/images/album/album3.jpg';
import img4 from '../assets/images/album/album4.jpg';
import img5 from '../assets/images/album/album5.jpg';
import img6 from '../assets/images/album/album6.jpg';
import img7 from '../assets/images/album/album7.jpg';
import img8 from '../assets/images/album/album8.jpg';
import img9 from '../assets/images/album/album9.jpg';
import img10 from '../assets/images/album/album10.jpg';
import img11 from '../assets/images/album/single_album.jpg';
import img12 from '../assets/images/music/r_music1.jpg';
import img13 from '../assets/images/music/r_music2.jpg';
import img14 from '../assets/images/music/r_music3.jpg';
import img15 from '../assets/images/music/r_music4.jpg';
import img16 from '../assets/images/music/r_music5.jpg';
import img17 from '../assets/images/music/r_music6.jpg';
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
import singer2 from '../assets/images/artist/artist1.jpg';
import singer3 from '../assets/images/artist/artist2.jpg';
import singer4 from '../assets/images/artist/artist3.jpg';
import singer5 from '../assets/images/artist/artist4.jpg';
import singer6 from '../assets/images/artist/artist5.jpg';
import singer7 from '../assets/images/artist/artist6.jpg';
import singer8 from '../assets/images/artist/artist7.jpg';
import singer9 from '../assets/images/artist/artist8.jpg';
import singer10 from '../assets/images/artist/artist9.jpg';
import singer11 from '../assets/images/artist/artist10.jpg';
import singer12 from '../assets/images/artist/artist11.jpg';
import singer13 from '../assets/images/artist/artist12.jpg';
import singer14 from '../assets/images/artist/artist13.jpg';

import {  Footer, Weekly } from '../components';

const Album = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
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
    <div style={{ background: '#14182a' }} className='w-screen max-h-full'>
      <div>
        <div className='flex justify-between  sm:justify-center mx-28 mt-32 text-lg  text-white'>
          <span className='sm:hidden'>
            <a href=''>مشاهده بیشتر</a>
          </span>
          <h1 style={{ color: ' #3bc8e7' }}>آلبوم های برتــر</h1>
        </div>
        <br />

        <div
          style={{ margin: '0 auto' }}
          className='w-11/12 sm:w-3/5 text-white'
        >
          <Slider {...settings}>
            <div>
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
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Desired Games
              </h1>
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
              <h1 className='text-right mr-24 mt-3 font-bold'>
                Until I Met You
              </h1>
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
            </div>{' '}
            <div>
              <img style={{ width: '80%' }} src={img7} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
              <h5 className='text-right mr-24 mt-3 text-sm '>
                Ava Cornish & Brian Hill
              </h5>
            </div>{' '}
            <div>
              <img style={{ width: '80%' }} src={img8} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
              <h5 className='text-right mr-24 mt-3 text-sm '>
                Ava Cornish & Brian Hill
              </h5>
            </div>{' '}
            <div>
              <img style={{ width: '80%' }} src={img9} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
              <h5 className='text-right mr-24 mt-3 text-sm '>
                Ava Cornish & Brian Hill
              </h5>
            </div>{' '}
            <div>
              <img style={{ width: '80%' }} src={img10} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
              <h5 className='text-right mr-24 mt-3 text-sm '>
                Ava Cornish & Brian Hill
              </h5>
            </div>{' '}
            <div>
              <img style={{ width: '80%' }} src={img11} alt='' />
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
      <div>
        <div className='flex justify-between  sm:justify-center mx-28 mt-32 text-lg  text-white'>
          <span className='sm:hidden'>
            <a href=''>مشاهده بیشتر</a>
          </span>
          <h1 style={{ color: ' #3bc8e7' }}>آلبوم های پرطرفدار</h1>
        </div>
        <br />

        <div
          style={{ margin: '0 auto' }}
          className='w-11/12 sm:w-3/5 text-white'
        >
          <Slider {...settings}>
            <div>
              <img style={{ width: '80% ' }} src={img11} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold  '>
                Dream Your Moments (Duet)
              </h1>
              <h5 className='text-right mr-24 mt-3 text-sm '>
                Ava Cornish & Brian Hill
              </h5>
            </div>
            <div>
              <img style={{ width: '80%' }} src={img17} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Desired Games
              </h1>
              <h5 className='text-right mr-24 mt-3 text-sm '>
                Ava Cornish & Brian Hill
              </h5>
            </div>
            <div>
              <img style={{ width: '80%' }} src={img13} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold'>
                Walking Promises
              </h1>
              <h5 className='text-right mr-24 mt-3 text-sm '>
                Ava Cornish & Brian Hill
              </h5>
            </div>
            <div>
              <img style={{ width: '80%' }} src={img14} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold'>
                Dark Alley Acoustic
              </h1>
              <h5 className='text-right mr-24 mt-3 text-sm '>
                Ava Cornish & Brian Hill
              </h5>
            </div>
            <div>
              <img style={{ width: '80%' }} src={img15} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold'>
                Until I Met You
              </h1>
              <h5 className='text-right mr-24 mt-3 text-sm '>
                Ava Cornish & Brian Hill
              </h5>
            </div>
            <div>
              <img style={{ width: '80%' }} src={img16} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
              <h5 className='text-right mr-24 mt-3 text-sm '>
                Ava Cornish & Brian Hill
              </h5>
            </div>{' '}
            <div>
              <img style={{ width: '80%' }} src={img3} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
              <h5 className='text-right mr-24 mt-3 text-sm '>
                Ava Cornish & Brian Hill
              </h5>
            </div>{' '}
            <div>
              <img style={{ width: '80%' }} src={img8} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
              <h5 className='text-right mr-24 mt-3 text-sm '>
                Ava Cornish & Brian Hill
              </h5>
            </div>{' '}
            <div>
              <img style={{ width: '80%' }} src={img9} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
              <h5 className='text-right mr-24 mt-3 text-sm '>
                Ava Cornish & Brian Hill
              </h5>
            </div>{' '}
            <div>
              <img style={{ width: '80%' }} src={img10} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
              <h5 className='text-right mr-24 mt-3 text-sm '>
                Ava Cornish & Brian Hill
              </h5>
            </div>{' '}
            <div>
              <img style={{ width: '80%' }} src={img5} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
              <h5 className='text-right mr-24 mt-3 text-sm '>
                Ava Cornish & Brian Hill
              </h5>
            </div>
          </Slider>
        </div>
        <br />
        <br />
        <br />
        <div className='sm:hidden m:hidden mr-7 '>
          <div className=' flex justify-end mx-28  text-lg sm:justify-center gap-96  text-white '>
            <h1 style={{ color: ' #3bc8e7' }}> آهنگ های برتر </h1>
          </div>
          <br />
          <br />
          <div
            className='flex justify-between xl:content-between   flex-wrap gap-10 text-white '
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
        <br />
        <br />
        <div className='flex justify-between  sm:justify-center mx-28 text-lg  text-white'>
          <span className='sm:hidden'>
            <a href=''>مشاهده بیشتر</a>
          </span>
          <h1 style={{ color: ' #3bc8e7' }}> آلبوم های خوانندگان</h1>
        </div>
        <br />
        <div
          style={{ margin: '0 auto' }}
          className='w-11/12 sm:w-3/5 text-white'
        >
          <Slider {...settings}>
            <div>
              <img style={{ width: '80%' }} src={singer12} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '> Ava Cornish</h1>
            </div>
            <div>
              <img style={{ width: '80%' }} src={singer13} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold'>Ava Cornish </h1>
            </div>
            <div>
              <img style={{ width: '80%' }} src={singer14} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold'>
                Dark Alley Acoustic
              </h1>
            </div>
            <div>
              <img style={{ width: '80%' }} src={singer5} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold'>
                Until I Met You
              </h1>
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
            <div>
              <img style={{ width: '80%' }} src={singer8} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
            </div>{' '}
            <div>
              <img style={{ width: '80%' }} src={singer9} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
            </div>{' '}
            <div>
              <img style={{ width: '80%' }} src={singer10} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
            </div>{' '}
            <div>
              <img style={{ width: '80%' }} src={singer11} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
            </div>{' '}
            <div>
              <img style={{ width: '80%' }} src={singer2} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
            </div>{' '}
            <div>
              <img style={{ width: '80%' }} src={singer3} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
            </div>{' '}
            <div>
              <img style={{ width: '80%' }} src={singer4} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
            </div>{' '}
          </Slider>
        </div>
      </div>
      <br />
      <br />
      <Footer />
      );
    </div>
  );
};

export default Album;
