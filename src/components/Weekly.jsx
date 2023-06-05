import React from 'react';

const Weekly = ({ index, week }) => {
  return (
    <div>
      <div
        className='  text-3xl text-white'
        style={{ width: '98.2%' }}
      >
        <div className='flex  text-center'>
          <div className='text-center text-6xl xl:text-xs xl:mr-6'>{index} </div>
          <img className='mr-5 ' src={week} alt='' />
          <h1 className=' text-lg w-48  mt-5 mr-3 xl:text-xs'>
            <a href='#'>Until I Met You</a>
          </h1>
          <span className=' text-lg w-48 xl:w-10  mt-5 mr-3 xl:text-xs'>5:10</span>
        </div>
      </div>
    </div>
  );
};

export default Weekly;
