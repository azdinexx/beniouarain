import Image from 'next/image';
import React from 'react';
import { Croissant_One } from 'next/font/google';

const font = Croissant_One({
  subsets: ['latin'],
  weight: ['400'],
});

function ShopCard({ title, img }: { title: string; img: string }) {
  return (
    <article className='relative group cursor-pointer  rounded-t-md overflow-hidden '>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden '>
        <Image
          src={img}
          alt={title}
          width={500}
          height={500}
          className='object-cover w-full h-full blur-  group-hover:blur-none group-hover:scale-110 transition-all duration-150 ease-in-out'
        />
        <div className='absolute w-full h-36 bg-gradient-to-t from-white to-transparent left-0 bottom-0 '></div>
      </div>
      <p
        className={`absolute bottom-5 left-6   pl-4  flex items-end  text-amber-800 ${font.className}`}
      >
        {title}
      </p>
    </article>
  );
}

export default ShopCard;
