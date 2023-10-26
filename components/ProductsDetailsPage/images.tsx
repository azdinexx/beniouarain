'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import cn from '@/lib/merge';
import ImageCaroussel from './ImageCaroussel';
import { isMobile } from 'react-device-detect';
import Link from 'next/link';
import ProductImagesModal from './ImageCaroussel';

function Images({ images, title }: { images: Array<string>; title: string }) {
  const [isClient, setIsClient] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(0);
  const [ImgIsLoaded, setImgIsLoaded] = React.useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient || !images) return null;
  const pathname = window.location.pathname;

  /* handling image loading */
  const handleLoad = () => {
    setImgIsLoaded(true);
  };

  return (
    <div className=' md:col-span-3 flex flex-col gap-8'>
      <div className='h-[20rem] md:h-[35rem]  relative '>
        <ProductImagesModal images={images} title={title} />
        {/* Next Button */}
        <button
          className={cn(
            'absolute z-10 top-1/2 right-10 w-10 h-10 bg-white  hover:opacity-70 rounded-full border flex justify-center items-center',
            !ImgIsLoaded && 'opacity-50 cursor-wait'
          )}
          onClick={() => {
            setCurrentImage((prev) =>
              prev === images.length - 1 ? 0 : prev + 1
            );
            setImgIsLoaded(false);
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
              d='M16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.313t.712.288L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7L16.15 13Z'
            />
          </svg>
        </button>
        {/* Previous Button */}
        <button
          className={cn(
            'absolute z-10 top-1/2 left-10 w-10 h-10 bg-white hover:opacity-70 rounded-full border flex justify-center items-center',
            !ImgIsLoaded && 'opacity-50  cursor-wait'
          )}
          onClick={() => {
            setCurrentImage((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            );
            setImgIsLoaded(false);
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
              d='m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13H7.85Z'
            />
          </svg>
        </button>

        {/* Placeholder */}
        {!ImgIsLoaded && (
          <div className='absolute top-0 left-0 w-full h-full bg-gray-100 flex justify-center items-center'>
            <div className='w-10 h-10 border-4 border-gray-300 rounded-full animate-spin'></div>
          </div>
        )}
        <Image
          src={images[currentImage]}
          alt='product'
          className='w-full h-full object-contain '
          width={1000}
          height={1000}
          onLoad={handleLoad}
        />
      </div>

      <Track
        images={images}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        setImgIsLoaded={setImgIsLoaded}
      />
    </div>
  );
}

export default Images;

function Track({
  images,
  currentImage,
  setCurrentImage,
  setImgIsLoaded,
}: {
  images: string[];
  currentImage: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>;
  setImgIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const initialState = Array(images.length).fill(true);
  const [Loading, setLoading] = React.useState(initialState);

  return (
    <>
      {isMobile ? null : (
        <div className=' grid grid-cols-4 gap-10 py-4 px-3 md:px-0 '>
          {images.map((image, index) => (
            <div
              key={index}
              className={cn(
                'aspect-square cursor-pointer  h-full  rounded-lg scale-90 overflow-hidden transition duration-150 ease-in-out blur-sm relative',

                currentImage === index
                  ? 'ring-2 ring-offset-3 ring-amber-500   brightness-125  scale-100 filter-none '
                  : ''
              )}
              onClick={() => {
                setCurrentImage(index);
                setImgIsLoaded(false);
              }}
            >
              {Loading[index] && (
                <div className='text-transparent absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse'>
                  this text is meant to be hidden
                </div>
              )}

              <Image
                src={image}
                alt='product'
                className='w-full h-full object-cover'
                height={200}
                width={200}
                onLoad={() => {
                  setLoading((prev) => {
                    const newState = [...prev];
                    newState[index] = false;
                    return newState;
                  });
                }}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
