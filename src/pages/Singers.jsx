import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import singer2 from '../assets/images/featured/song1.jpg';
import singer3 from '../assets/images/featured/song2.jpg';
import singer4 from '../assets/images/featured/song3.jpg';
import singer5 from '../assets/images/featured/song4.jpg';
import singer6 from '../assets/images/featured/song5.jpg';
import singer7 from '../assets/images/featured/song6.jpg';
import singer8 from '../assets/images/artist/artist1.jpg';
import singer9 from '../assets/images/artist/artist2.jpg';
import singer10 from '../assets/images/artist/artist3.jpg';
import singer11 from '../assets/images/artist/artist4.jpg';
import singer12 from '../assets/images/artist/artist5.jpg';
import singer13 from '../assets/images/artist/artist6.jpg';
import singer14 from '../assets/images/artist/artist7.jpg';
import singer15 from '../assets/images/artist/artist8.jpg';
import singer16 from '../assets/images/artist/artist9.jpg';
import singer17 from '../assets/images/artist/artist10.jpg';
import singer18 from '../assets/images/artist/artist11.jpg';
import singer19 from '../assets/images/artist/artist12.jpg';
import singer20 from '../assets/images/artist/artist13.jpg';
import { Footer } from '../components';

const Singers = () => {
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
    <div style={{ background: '#14182a' }} className='w-screen h-fit '>
      <div className='mt-32'>
        <div className='flex justify-between  sm:justify-center mx-28 text-lg  text-white'>
          <span className='sm:hidden'>
            <a href=''>مشاهده بیشتر</a>
          </span>
          <h1 style={{ color: ' #3bc8e7' }} className='font-bold'>
            خوانندگان برتر
          </h1>
        </div>
        <br />

        <div
          style={{ margin: '0 auto' }}
          className='w-11/12 sm:w-3/5 text-white'
        >
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
              <h1 className='text-right mr-24 mt-3 font-bold'>
                Until I Met You
              </h1>
            </div>
            <div>
              <img style={{ width: '80%' }} src={singer6} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
            </div>
            <div>
              <img style={{ width: '80%' }} src={singer7} alt='' />
              <h1 className='text-right mr-24 mt-3 font-bold '>
                Gimme Some Courage
              </h1>
            </div>
          </Slider>
        </div>
      </div>

      <div className='flex justify-end mt-32 sm:justify-center mx-28 text-lg  text-white'>
        <h1 style={{ color: ' #3bc8e7' }} className='font-bold'>
          خوانندگان{' '}
        </h1>
      </div>

      <div className='flex flex-wrap ms:justify-center   justify-end gap-14 mt-14 w-11/12 '>
        {itemData.map((item) => (
          <div key={item.img}>
            <img src={`${item.img}`} className='w-96 ms:w-44 2xl:w-60' />
            <h1 className='text-white mt-4 text-center '>{item.title}</h1>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
const itemData = [
  {
    img: singer8,
    title: 'Desired',
  },
  {
    img: singer9,
    title: 'mamad hashemi',
  },
  {
    img: singer10,
    title: 'reza ayne',
  },
  {
    img: singer11,
    title: 'Amir Deldar',
  },
  {
    img: singer12,
    title: 'ali alili',
  },
  {
    img: singer13,
    title: 'hamed pakdel',
  },
  {
    img: singer14,
    title: 'milad rezai',
  },
  {
    img: singer15,
    title: 'Mohsen tanabande',
  },
  {
    img: singer16,
    title: 'Peyman Nouri',
  },
  {
    img: singer17,
    title: 'keyvan ',
  },
  {
    img: singer18,
    title: 'hamed pakdel',
  },
  {
    img: singer19,
    title: 'JLO',
  },
  {
    img: singer20,
    title: 'NF',
  },
];
export default Singers;
