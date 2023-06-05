import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AddIcon from '@mui/icons-material/Add';
import TranslateIcon from '@mui/icons-material/Translate';
const Navbar = ({ width, setWidth }) => {
  const buttonClassXL =
    'text-white w-28 h-11  text-center leading-6  rounded-lg';
  const buttonClassSm = 'rounded-full p-2';
  const vorod = 'ورود';
  const signIn = 'ثبت نام';

  const updateWindowDimensions = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
    console.log(newWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions());
    window.addEventListener('resize', updateWindowDimensions);
  }),
    [width];

  return (
    <>
      <div
        className='fixed   w-full py-5 px-14 '
        style={{ background: '#1b2039' }}
      >
        <nav className='flex justify-between w-full'>
          <div className='  relative  '>
            <SearchIcon
              className='text-white   text-center '
              style={{ background: ' #3bc8e7', height: '43px' }}
              fontSize='medium'
            />
            <input
              className='placeholder-black   h-11 placeholder:text-center '
              type='text'
              placeholder='جستجو آهنگ , خواننده'
            />
          </div>

          <span className=' text-white mt-3  '>
            <a href='/'>
              <span className='mr-2 sm:hidden  md:inline-block'>Time</span>

              <span
                className='sm:hidden md:inline-block'
                style={{ color: ' #3bc8e7' }}
              >
                آهنگ های پر بازدید
              </span>
            </a>
          </span>

          <div className=' inline-block justify-end space-x-2   xl:mr-1'>
            <button
              className={width <= 899 ? buttonClassSm : buttonClassXL}
              style={{ background: ' #3bc8e7' }}
              type='button'
            >
              {width <= 899 ? <AddIcon /> : signIn}
            </button>

            <button
              className={width <= 899 ? buttonClassSm : buttonClassXL}
              style={{ background: ' #3bc8e7' }}
              type='button'
            >
              {width <= 899 ? <AssignmentIndIcon /> : vorod}
            </button>
          </div>

          <button type='button'>
            <div className='h-11 flex mr-16 mt-2 text-white md:hidden md:inline-block'>
              <TranslateIcon className='mt-1 md:hidden ' fontSize='small' />
              زبان ها
            </div>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
