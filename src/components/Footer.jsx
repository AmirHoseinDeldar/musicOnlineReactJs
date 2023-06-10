import React from 'react';
import googleplay from '../assets/images/google_play.jpg';
import bgFooter from '../assets/images/footer_bg.png';
import applestore from '../assets/images/app_store.jpg';
import windows from '../assets/images/windows.jpg';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EventIcon from '@mui/icons-material/Event';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <div
      className='flex  justify-between text-right mr-8 text-white  '
      style={{
        backgroundImage: `url(${bgFooter})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '35vh',
      }}
    >
      <div className=' mt-20 ml-3 '>
        <h1 style={{ color: ' #3bc8e7' }}>تماس با ما</h1>
        <div>
          <span>
            شماره تماس:{' '}
            <LocalPhoneOutlinedIcon
              className='w-20 h-20 text-center leading-20  '
              style={{
                background:
                  'linear-gradient( 90deg, rgb(22, 26, 46) 0%, rgb(237, 63, 179) 0%, rgb(59, 200, 231) 0%, rgb(32, 167, 196) 100%)',
                width: '30px',
                height: '30px',
                lineHeight: '30px',
                borderRadius: '5px',
              }}
            />
          </span>
          <br />
          <a href='sssss'>09121234567</a>
          <br />
          <br />
          <span>
            ایمیل{' '}
            <EmailOutlinedIcon
              style={{
                background:
                  'linear-gradient( 90deg, rgb(22, 26, 46) 0%, rgb(237, 63, 179) 0%, rgb(59, 200, 231) 0%, rgb(32, 167, 196) 100%)',
                width: '30px',
                height: '30px',
                lineHeight: '30px',
                borderRadius: '5px',
              }}
            />
          </span>
          <br />
          <a href='sssss'>amirhoseindeldar@yahoo.com</a>
          <br />
          <br />
          <span>
            آدرس{' '}
            <LocationOnOutlinedIcon
              style={{
                background:
                  'linear-gradient( 90deg, rgb(22, 26, 46) 0%, rgb(237, 63, 179) 0%, rgb(59, 200, 231) 0%, rgb(32, 167, 196) 100%)',
                width: '30px',
                height: '30px',
                lineHeight: '30px',
                borderRadius: '5px',
              }}
            />
          </span>
          <br />

          <span>جنت آباد مرکزی خیابان دانش</span>
          <ul className='flex justify-end mt-4 text-center gap-2 ml-4'>
            <li
              style={{
                background:
                  'linear-gradient( 90deg, rgb(22, 26, 46) 0%, rgb(237, 63, 179) 0%, rgb(59, 200, 231) 0%, rgb(32, 167, 196) 100%)',
                width: '30px',
                height: '30px',
                lineHeight: '30px',
                borderRadius: '5px',
              }}
            >
              <a href='/'>
                <LinkedInIcon />
              </a>
            </li>
            <li
              style={{
                background:
                  'linear-gradient( 90deg, rgb(22, 26, 46) 0%, rgb(237, 63, 179) 0%, rgb(59, 200, 231) 0%, rgb(32, 167, 196) 100%)',
                width: '30px',
                height: '30px',
                lineHeight: '30px',
                borderRadius: '5px',
              }}
            >
              <a href='/'>
                <TwitterIcon />
              </a>
            </li>
            <li
              style={{
                background:
                  'linear-gradient( 90deg, rgb(22, 26, 46) 0%, rgb(237, 63, 179) 0%, rgb(59, 200, 231) 0%, rgb(32, 167, 196) 100%)',
                width: '30px',
                height: '30px',
                lineHeight: '30px',
                borderRadius: '5px',
              }}
            >
              <a href='/'>
                <EventIcon />
              </a>
            </li>
            <li
              style={{
                background:
                  'linear-gradient( 90deg, rgb(22, 26, 46) 0%, rgb(237, 63, 179) 0%, rgb(59, 200, 231) 0%, rgb(32, 167, 196) 100%)',
                width: '30px',
                height: '30px',
                lineHeight: '30px',
                borderRadius: '5px',
              }}
            >
              <a href='/'>
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=' mt-20  '>
        <h1 style={{ color: ' #3bc8e7' }}>خبرنامه</h1>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم <br /> از صنعت چاپ و با
          استفاده از <br /> طراحان گرافیک است.{' '}
        </p>

        <div>
          {' '}
          <input
            className='my-2 placeholder:text-right p-2'
            type='text'
            name=''
            placeholder='... نام'
            id=''
          />
          <br />
          <input
            type='text'
            name=''
            className='placeholder:text-right p-2'
            placeholder='... ایمیل'
            id=''
          />{' '}
          <br />
          <br />
          <button
            type='text'
            style={{ background: ' #3bc8e7' }}
            className='text-white w-28 h-11   text-center leading-6  rounded-lg'
          >
            عضویت در خبرنامه
          </button>
        </div>
      </div>

      <div className=' mt-20  '>
        <h1 style={{ color: ' #3bc8e7' }} className='mb-4 '>
          دانلود اپ موبایل
        </h1>
        <a href='/'>
          <img src={googleplay} alt='' />
        </a>
        <br />
        <a href='/'>
          <img src={applestore} alt='' />
        </a>{' '}
        <br />
        <a href='/'>
          <img src={windows} alt='' />
        </a>
      </div>
      <div className=' mt-20 mr-3 '>
        <h1 style={{ color: ' #3bc8e7' }} className='mb-4'>
          Midelar
        </h1>
        <p className=''>
          لورم ایپسوم متن ساختگی با تولید سادگی <br />
          نامفهوم از صنعت چاپ و با استفاده
          <br />
          از طراحان گرافیک است. چاپگرها <br />و متون بلکه روزنامه و مجله <br />
          در ستون و سطرآنچنان که لازم است و برای
          <br /> شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          <br />
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.{' '}
        </p>
      </div>
    </div>
  );
};

export default Footer;
