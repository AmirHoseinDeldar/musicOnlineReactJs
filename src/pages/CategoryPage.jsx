import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import '../components';
import img1 from '../assets/images/genrs/img1.jpg';
import img2 from '../assets/images/genrs/img2.jpg';
import img3 from '../assets/images/genrs/img3.jpg';
import img4 from '../assets/images/genrs/img4.jpg';
import img5 from '../assets/images/genrs/img5.jpg';
import img6 from '../assets/images/genrs/img6.jpg';
import img7 from '../assets/images/genrs/img7.jpg';
import img8 from '../assets/images/genrs/img8.jpg';
import img9 from '../assets/images/genrs/img9.jpg';
import img10 from '../assets/images/genrs/img10.jpg';
import img11 from '../assets/images/genrs/img11.jpg';
import img12 from '../assets/images/genrs/img12.jpg';
import img13 from '../assets/images/genrs/img13.jpg';
import img14 from '../assets/images/genrs/img14.jpg';
import img15 from '../assets/images/genrs/img15.jpg';
import img16 from '../assets/images/genrs/img16.jpg';
import img17 from '../assets/images/genrs/img17.jpg';
import img18 from '../assets/images/genrs/img18.jpg';
import { Footer } from '../components';
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const CategoryPage = () => {
  return (
    <div className='mt-32'>
      <div className='flex justify-between   sm:justify-center mx-28 text-lg  text-white'>
        <span className='sm:hidden'>
          <a href=''>آخرین بازدیدها</a>
        </span>
        <h1 style={{ color: ' #3bc8e7' }}>سبک های پر مخاطب</h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div style={{ marginLeft: '10%' }} className='    '>
        <ImageList
          variant='masonry'
          cols={5}
          rowHeight={200}
          gap={29}
          sx={{ height: '800px' }}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading='lazy'
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient( 90deg, rgb(20, 24, 42) 0%, rgb(237, 63, 179) 0%, rgb(52, 62, 105) 0%, rgba(32, 167, 196, 0) 100%)',
                  height: '100%',
                  textAlign: 'center',
                  '& .MuiImageListItemBar-title': { fontSize: '26px' },
                }}
                title={item.title}
                position='bottom'
                actionIcon={
                  <IconButton aria-label={`star ${item.title}`}></IconButton>
                }
                actionPosition='left'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      <div className='flex justify-between   sm:justify-center mx-28 text-lg  text-white'>
        <span className='sm:hidden'>
          <a href=''>آخرین بازدیدها</a>
        </span>
        <h1 style={{ color: ' #3bc8e7' }}>سبک های پر مخاطب</h1>
      </div>

      <div className='w-full mt-12'>
        <ImageList
          variant='masonry'
          cols={5}
          rowHeight={200}
          gap={29}
          sx={{ height: '800px' }}
        >
          {itemData2.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading='lazy'
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient( 90deg, rgb(20, 24, 42) 0%, rgb(237, 63, 179) 0%, rgb(52, 62, 105) 0%, rgba(32, 167, 196, 0) 100%)',
                  height: '100%',
                  textAlign: 'center',
                  '& .MuiImageListItemBar-title': { fontSize: '26px' },
                }}
                title={item.title}
                position='bottom'
                actionIcon={
                  <IconButton aria-label={`star ${item.title}`}></IconButton>
                }
                actionPosition='left'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <Footer />
    </div>
  );
};
const itemData = [
  {
    img: img4,
    title: 'راک',
    rows: 3,
    cols: 1,
  },
  {
    img: img3,
    title: 'هیپ هاپ',
  },
  {
    img: img6,
    title: 'پاپ',
  },
  {
    img: img7,
    title: 'جاز',
  },
  {
    img: img8,
    title: 'درام',
  },

  {
    img: img2,
    title: 'کلاسیک',
  },
  {
    img: img5,
    title: 'شاد مجلسی',
  },
  {
    img: img1,
    title: 'عاشقانه',
    rows: 3,
    cols: 1,
  },
];
const itemData2 = [
  {
    img: img12,
    title: 'راک',
    rows: 3,
    cols: 1,
  },
  {
    img: img9,
    title: 'هیپ هاپ',
  },
  {
    img: img10,
    title: 'پاپ',
  },
  {
    img: img11,
    title: 'جاز',
  },
  {
    img: img14,
    title: 'درام',
  },

  {
    img: img6,
    title: 'کلاسیک',
  },
  {
    img: img1,
    title: 'کاپل طور',
  },
  {
    img: img17,
    title: 'لاو',
  },
  {
    img: img18,
    title: 'رمانتیک',
  },
  {
    img: img16,
    title: 'دیس لاو',
  },
  {
    img: img13,
    title: 'عاشقانه',
    rows: 3,
    cols: 1,
  },
];
export default CategoryPage;
