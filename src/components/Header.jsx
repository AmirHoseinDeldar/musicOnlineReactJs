import React from 'react';
import banner from '../assets/images/banner.png';

const Header = () => {
  return (
    <>
      <div className='h-full w-full  '>
        <div className='flex justify-evenly  lg:flex-col'>
          <img
            src={banner}
            alt=''
            className='object-cover lg:object-none sm:mt-64 lg:mt-0  mt-48 '
          />

          <div className='mt-60 2xl:mr-24 lg:mt-1 lg:mr-3   '>
            <h1 className='text-5xl lg:text-3xl text-white text-center'>
              آلبوم های <br />
              <br />
              <span className='' style={{ color: '#3bc8e7' }}>
                منتشر شده این ماه
              </span>
            </h1>
            <br />
            <br />
            <h4 className='text-white text-right lg:text-center sm:hidden'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.بهبود ابزارهای کاربردی می باشد.{' '}
            </h4>
            <br />
            <br />
            <div className='flex justify-center gap-2 lg:justify-evenly text-white ' >
              <button style={{background: ' #3bc8e7' }} className='w-36 h-11  text-center leading-6  rounded-lg'  type='text'>حالا گوش کنید</button>
              <button className='w-36 h-11  text-center leading-6  rounded-lg' style={{background: ' #3bc8e7' }} type='text'>اضافه کردن به لیست</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
