import Image from 'next/image';
import React, { useContext, useEffect } from 'react';
import { CarouselContext } from '@/hooks/CarouselContext';

function ImageCaroussel({
  images,
  current,
}: {
  images: string[];
  current: number;
}) {
  const { setIsOpen } = useContext(CarouselContext);

  useEffect(() => {
    const prev = document.getElementById('prev' + current.toString());
    prev?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  return (
    <section className='fixed z-50 bg-slate-200    w-screen  h-screen overflow-hidden overflow-y-scroll  '>
      <button
        onClick={() => setIsOpen(false)}
        className='w-16 h-16 bg-red-200 active:scale-90 fixed flex items-center justify-center rounded-full top-10 right-10 hover:opacity-60'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z'
          />
        </svg>
      </button>
      <div className='flex flex-col gap-10  m-5'>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt='product'
            className='object-contain w-full h-auto'
            height={2000}
            width={2000}
            id={'prev' + index.toString()}
          />
        ))}
      </div>
    </section>
  );
}

export default ImageCaroussel;
