'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import cn from '@/lib/merge';
import { Product } from '@/lib/shopify/types';
import LoadingDots from '../loading-dots';
import Link from 'next/link';

interface Props {
  products: Product[];
}

function Carousel({ products }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isclient, setisclient] = useState(true);

  useEffect(() => {
    setisclient(true);
  }, []);

  if (!isclient || !products) return null;
  return (
    <div className=' p-3   md:hidden my-3 relative flex flex-col'>
      {/* Controllers */}
      <Controllers
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        setLoading={setLoading}
        max={products.length - 1}
      />
      {/* Image */}
      {/* Loading*/}
      <div className=' relative aspect-square m-1'>
        <ImageLoading loading={loading} />
        <Link href={'/all/' + products[currentSlide].handle}>
          <Image
            width={800}
            height={800}
            src={products[currentSlide].featuredImage.url}
            alt='Antique Rugs'
            className='object-cover  inset-0 w-full h-full'
            onLoadingComplete={() => setLoading(false)}
          />
        </Link>
      </div>
      {loading ? (
        <>
          <TextLoading />

          <div className='flex gap-2 justify-center my-2'>
            <button className='px-5 py-2  text-white bg-amber-400 rounded-s-full animate-pulse opacity-70'>
              Add To Cart
            </button>
            <button className='px-5 py-2   border border-amber-400 rounded-e-full animate-pulse opacity-70'>
              All Products
            </button>
          </div>
        </>
      ) : (
        <>
          <Link href={'/all/' + products[currentSlide].handle}>
            <h1 className={'m-3   text-gray-800'}>
              {products[currentSlide].title}
            </h1>
          </Link>

          <div className='flex gap-2 justify-center my-2'>
            <button className=' px-5 py-2 text-white  bg-amber-400 rounded-s-full'>
              Add To Cart
            </button>
            <Link
              href='/all'
              className=' px-5 py-2 border   border-amber-400 rounded-e-full'
            >
              All Products
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;

function Controllers({
  setCurrentSlide,
  currentSlide,
  setLoading,
  max,
}: {
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  currentSlide: number;
  max: number;
}) {
  return (
    <>
      <button
        className='absolute z-10 top-1/3 right-7 text-gray-50 rounded-full'
        onClick={() => {
          currentSlide === max
            ? setCurrentSlide(0)
            : setCurrentSlide(currentSlide + 1);
          setLoading(true);
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='36'
          height='36'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm.2-9l-.9.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l.9.9H9q-.425 0-.713.288T8 12q0 .425.288.713T9 13h3.2Z'
          />
        </svg>
      </button>
      <button
        className='z-10 absolute top-1/3 left-7 text-gray-50 rounded-full'
        onClick={() => {
          currentSlide === 0
            ? setCurrentSlide(max)
            : setCurrentSlide(currentSlide - 1);
          setLoading(true);
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='36'
          height='36'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentColor'
            d='M11.8 13H15q.425 0 .713-.288T16 12q0-.425-.288-.713T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-.9-.9Zm.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z'
          />
        </svg>
      </button>
    </>
  );
}

function ImageLoading({ loading }: { loading: boolean }) {
  if (!loading) return;
  return (
    <div className='absolute inset w-full h-full backdrop-blur-sm flex items-center justify-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 24 24'
        className='   text-yellow-500 animate-spin'
      >
        <g fill='none' fillRule='evenodd'>
          <path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z' />
          <path
            fill='currentColor'
            d='M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15ZM1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12S17.799 22.5 12 22.5S1.5 17.799 1.5 12Z'
            opacity='.1'
          />
          <path
            fill='currentColor'
            d='M12 4.5a7.458 7.458 0 0 0-5.187 2.083a1.5 1.5 0 0 1-2.075-2.166A10.458 10.458 0 0 1 12 1.5a1.5 1.5 0 0 1 0 3Z'
          />
        </g>
      </svg>
    </div>
  );
}

function TextLoading() {
  return (
    <p className='flex flex-col text-transparent w-full gap-1 p-3 '>
      <span className='animate-pulse   bg-gray-300'>qq</span>
      <span className='animate-pulse   bg-gray-300'>qqqq</span>
      <span className='animate-pulse bg-gray-300 w-16'>qqq</span>
    </p>
  );
}
