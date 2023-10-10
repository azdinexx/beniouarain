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
        {/* Next Button */}
        <button
          className='absolute top-1/2 right-10 w-10 h-10 bg-white  hover:opacity-70 rounded-full border flex justify-center items-center'
          onClick={() =>
            setCurrentImage((prev) =>
              prev === images.length - 1 ? 0 : prev + 1
            )
          }
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.313t.712.288L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7L16.15 13Z'
            />
          </svg>
        </button>
        {/* Previous Button */}
        <button
          className='absolute top-1/2 left-10 w-10 h-10 bg-white hover:opacity-70 rounded-full border flex justify-center items-center'
          onClick={() =>
            setCurrentImage((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            )
          }
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13H7.85Z'
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
              'aspect-square cursor-pointer  h-full  rounded-lg scale-90 overflow-hidden transition duration-150 ease-in-out blur-sm',

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
