import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import { NavLink } from 'react-router-dom';
import AlbumIcon from '@mui/icons-material/Album';
import MicIcon from '@mui/icons-material/Mic';
import CategoryIcon from '@mui/icons-material/Category';
import UploadIcon from '@mui/icons-material/Upload';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const SideBar = ({ width, setWidth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const updateSideBar = () => {
    const newSide = window.innerWidth;
    setWidth(newSide);
    console.log(newSide);
  };

  useEffect(() => {
    window.addEventListener('resize', updateSideBar());
    window.addEventListener('resize', updateSideBar);
  }),
    [width];

  const menuItem = [
    {
      path: '/',
      name: 'خانه',
      icon: <HomeIcon fontSize='large' />,
    },
    {
      path: '/album',
      name: 'آلبوم ها',
      icon: <AlbumIcon fontSize='large' />,
    },
    {
      path: '/analytics',
      name: 'خواننده ها',
      icon: <MicIcon fontSize='large' />,
    },
    {
      path: '/category',
      name: 'سبک ها',
      icon: <CategoryIcon fontSize='large' />,
    },
  ];
  return (
    <>
      <div className='flex flex-col  '>
        <div
          className='h-screen self-end fixed   z-50  '
          style={{ background: '#1b2039', width: isOpen ? '140px' : '45px' }}
        >
          <VerticalSplitIcon
            onClick={toggle}
            fontSize='large'
            className='mt-10 ml-2 text-white absolute cursor-pointer '
            style={{ marginLeft: isOpen ? '56px' : '5px' }}
          />

          <img
            className=' w-12 h-12  mt-48    '
            src={logo}
            style={{
              marginLeft: isOpen ? '30px' : '1px',
              width: isOpen ? '90px' : '48px',
              height: isOpen ? '90px' : '48px',
            }}
          />
          <div className=' mt-1   mr-1  '>
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className=' pt-16 flex text-gray-50  justify-end gap-3 '
              >
                <div
                  className=' mt-2 text-left '
                  style={{
                    display: isOpen ? 'block' : 'none',
                  }}
                >
                  {item.name}
                </div>

                <div
                  className='  '
                  style={{ marginLeft: isOpen ? '6px' : '4px' }}
                >
                  {item.icon}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
