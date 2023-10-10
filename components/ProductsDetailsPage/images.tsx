'use client';
import React from 'react';
import { CarouselContext } from '@/hooks/CarouselContext';
import { useContext } from 'react';
import Image from 'next/image';
import cn from '@/lib/merge';

function Images({ images }: { images: Array<string> }) {
  const { setIsOpen, setimages, setCurrent } = useContext(CarouselContext);
  const [currentImage, setCurrentImage] = React.useState(0);
  setimages(images);

  return (
    <div className=' col-span-3 flex flex-col gap-8'>
      <div className='h-[35rem]  relative '>
        <button
          className='w-16 h-16 absolute top-6 right-6 z-10 bg-amber-300 rounded-full shadow-lg flex items-center justify-center hover:opacity-70'
          onClick={() => {
            setIsOpen(true);
            setCurrent(currentImage);
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M3 21v-6h2v2.6l3.1-3.1l1.4 1.4L6.4 19H9v2H3ZM15.9 9.5l-1.4-1.4L17.6 5H15V3h6v6h-2V6.4l-3.1 3.1Z'
            />
          </svg>
        </button>
        <Image
          src={images[currentImage]}
          alt='product'
          className='w-full h-full object-contain '
          width={1000}
          height={1000}
        />
      </div>
      <div className=' grid grid-cols-4 gap-10 py-4 '>
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              'aspect-square  h-full  rounded-lg scale-90 overflow-hidden transition duration-150 ease-in-out blur-sm',

              currentImage === index
                ? 'ring-2 ring-offset-3 ring-amber-500   brightness-125  scale-100 filter-none '
                : ''
            )}
            onClick={() => setCurrentImage(index)}
          >
            <Image
              src={image}
              alt='product'
              className='w-full h-full object-cover'
              height={200}
              width={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Images;
