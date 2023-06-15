import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import TranslateIcon from '@mui/icons-material/Translate';
import register from '../assets/images/register_img.png';

const Navbar = ({ width, setWidth }) => {
  const buttonClassXL =
    'text-white w-28 h-11  text-center leading-6  rounded-lg';
  const buttonClassSm = 'rounded-full p-2';
  const vorod = 'ورود';
  const signIn = 'ثبت نام';
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen1(!open1);

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
        className='fixed   w-full py-5 px-14 z-50 '
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
              onClick={handleOpen}
              className={width <= 899 ? buttonClassSm : buttonClassXL}
              style={{ background: ' #3bc8e7' }}
              type='button'
            >
              {width <= 899 ? <AddIcon /> : signIn}
            </button>

            <button
              onClick={handleClose}
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
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        className=''
      >
        <div
          id='myModal1'
          className='absolute   top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white     '
          style={{ background: '#3bc8e7' }}
        >
          <div
            className=' flex  gap-40 justify-between 
           2.5xl:justify-center lg:w-80 '
          >
            <img
              className='w-96  h-96 ml-10 mt-16 2.5xl:w-80 2.5xl:h-80 xl:w-52 lg:hidden xl:h-52  '
              src={register}
              alt=''
            />
            <div className='   mt-16  flex-col mr-12'>
              <div className='flex justify-center'>
                <h3 className='font-bold inline 2xl:text-xl mr-6 text-2xl'>
                  ثبت نام
                </h3>
                <h3 className='font-bold inline 2xl:text-xl text-2xl'>ورود</h3>
              </div>
              <div className='gap-9 mt-11 flex flex-col w-96 2.5xl:w-80 2xl:w-40   text-black'>
                <input
                  className='placeholder:text-right  '
                  type='text'
                  placeholder='نام کاربری'
                />{' '}
                <input
                  className='placeholder:text-right'
                  type='email'
                  placeholder='@gmail.com'
                />{' '}
                <input
                  className='placeholder:text-right'
                  type='password'
                  placeholder='رمزعبور'
                />{' '}
                <input
                  className='placeholder:text-right'
                  type='password'
                  placeholder='تکرار رمزعبور'
                />
                <button className='border-2 rounded-xl text-white w-15'>
                  {signIn}
                </button>
                <h5 className='text-center'>
                  {' '}
                  قبلا ثبت نام کرده اید؟{' '}
                  <span className='font-bold cursor-pointer'>
                    <a href='#myModal' data-toggle='myModal'>
                      ورود
                    </a>
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div
          id='myModal'
          className='absolute   top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white   '
          style={{ background: '#3bc8e7' }}
        >
          <div
            className=' flex  gap-40 justify-between 
             '
          >
            <img
              className='w-96  h-96 ml-10 mt-16 2.5xl:w-60 2.5xl:mt-9 2.5xl:h-60  xl:w-36 xl:h-36 sm:hidden'
              src={register}
              alt=''
            />
            <div className=' flex mt-40 2.5xl:mt-5 flex-col mr-44 '>
              <div className='flex justify-center  '>
                <h3 className='font-bold inline mr-6 2.5xl:text-xltext-2xl'>
                  ثبت نام
                </h3>
                <h3 className='font-bold inline 2.5xl:text-xl  text-2xl'>
                  ورود
                </h3>
              </div>
              <div className='gap-9 2.5xl:gap-2 mt-11 2.5xl:mt-6 flex flex-col w-96   2.5xl:w-52 xl:w-36  sm:ml-20  2.5xl:h-52   text-black'>
                <input
                  className='placeholder:text-right h-16  xl:h-9 '
                  type='text'
                  placeholder='نام کاربری'
                />{' '}
                <input
                  className='placeholder:text-right xl:h-9 h-16  '
                  type='password'
                  placeholder='رمزعبور'
                />{' '}
                <button className='border-2 rounded-xl text-white w-15 h-14  font-bold 2.5xl:text-xl  text-2xl xl:text-sm  xl:h-10 '>
                  {signIn}
                </button>
                <h5 className='text-center xl:text-sm cursor-pointer '>
                  {' '}
                  رمز عبور را فراموش کرده اید ؟
                </h5>
                <h5 className='text-center xl:text-sm'>
                  حساب کاربری ندارید؟
                  <span className='font-bold xl:text-sm cursor-pointer'>
                    <a href='#myModal1'>ثبت نام</a>
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
