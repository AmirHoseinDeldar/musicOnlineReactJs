import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import './style.css';
import img1 from '../assets/images/genrs/img1.jpg';
import img2 from '../assets/images/genrs/img2.jpg';
import img3 from '../assets/images/genrs/img3.jpg';
import img4 from '../assets/images/genrs/img4.jpg';
import img5 from '../assets/images/genrs/img5.jpg';
import img6 from '../assets/images/genrs/img6.jpg';
import img7 from '../assets/images/genrs/img7.jpg';
import img8 from '../assets/images/genrs/img8.jpg';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Category = () => {
  return (
    <div>
      <div className='flex justify-between  sm:justify-center mx-28 text-lg  text-white'>
        <span className='sm:hidden'>
          <a href=''>آخرین بازدیدها</a>
        </span>
        <h1 style={{ color: ' #3bc8e7' }}>سبک های پر مخاطب</h1>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div style={{ marginLeft: '10%' }} className='w-full  '>
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
export default Category;
