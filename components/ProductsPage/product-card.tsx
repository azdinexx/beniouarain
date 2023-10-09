import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  images: string[];
  price: number;
  id: number | string;
}

function ProductCard({ title, images, price, id }: ProductCardProps) {
  function changeImg(changeTOsecondImg: boolean) {
    if (changeTOsecondImg) {
      return images[1] ? images[1] : images[0];
    }
    return images[0];
  }
  return (
    <div key={id} className='flex flex-col'>
      <div className='overflow-hidden' data-scroll data-scroll-speed='0.9'>
        <Image
          src={images[0] ? images[0] : '/no-image.png'}
          alt={title}
          className='w-full h-64 object-cover'
          width={650}
          height={650}
          data-scroll
          data-scroll-speed='0.4'
        />
      </div>
      <div className='text-left text-xs pt-2'>
        {title.substring(0, 55) + '...'}
      </div>
      <div className='text-center'>$20</div>
    </div>
  );
}

export default ProductCard;
