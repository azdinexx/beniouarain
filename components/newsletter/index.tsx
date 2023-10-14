import React from 'react';
import Image from 'next/image';

function NewsLetter() {
  return (
    <div className='min-h-screen w-full overflow-hidden'>
      <Image
        src='/images/bg.jpg'
        height={2000}
        width={2000}
        alt=''
        data-scroll
        data-scroll-speed='0.4'
        className='object-cover w-full h-full  absolute z-100 top-0 left-0 '
      />
    </div>
  );
}

export default NewsLetter;
