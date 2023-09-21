import React from 'react';
import Image, { StaticImageData } from 'next/image';

function HoverCard({
  className,
  image,
  title,
}: {
  className: string;
  image?: StaticImageData;
  title: string;
}) {
  return (
    <div
      className={
        className +
        'relative overflow-hidden  border-black/5 border rounded-md p-2 text-gray-700 hover:scale-95 transition-all duration-300 cursor-pointer '
      }
    >
      {image && (
        <Image
          src={image}
          alt='the best image ever'
          width={1000}
          height={1000}
          className='w-full h-full absolute top-0 left-0 object-cover -z-10'
        />
      )}
      <div className='w-full h-full absolute top-0 left-0 object-cover hover:bg-black/25 transition-all duration-300 flex items-center justify-center group'>
        <h2 className='text-black/40 group-hover:text-white text-2xl font-bold'>
          {title}
        </h2>
      </div>
    </div>
  );
}

export default HoverCard;
