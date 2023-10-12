'use client';
import Image from 'next/image';
import React, { useContext, useEffect } from 'react';
import { Dialog } from '@headlessui/react';

function ImageCaroussel({
  images,
  current,
}: {
  images: string[];
  current: number;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    const prev = document.getElementById('prev' + current.toString());
    prev?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  return (
    <>
      <button
        className='w-16 h-16 absolute top-6 right-6 z-10 bg-amber-300 rounded-full shadow-lg flex items-center justify-center hover:opacity-70'
        onClick={() => setIsOpen(true)}
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
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='relative z-50'
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div
          className='fixed inset-0 bg-black/30 pointer-events-none '
          aria-hidden='true'
        />

        {/* Full-screen scrollable container */}
        <div className='fixed inset-0 w-screen overflow-y-auto'>
          {/* Container to center the panel */}
          <div className='flex min-h-full items-center justify-center p-4'>
            {/* The actual dialog panel  */}
            <Dialog.Panel className='mx-auto max-w-sm rounded bg-white'>
              <div className='absolute top-0 left-0 z-50 bg-slate-200    w-full box-border   p-10'>
                <button
                  onClick={() => setIsOpen(false)}
                  className='w-16 h-16 bg-amber-200 active:scale-90 fixed flex items-center justify-center rounded-full top-20 right-20 hover:opacity-60'
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
                <div className='flex flex-col gap-10    w-full overflow-hidden '>
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
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default ImageCaroussel;

{
  /*
      <div
      className='absolute top-0 left-0 z-50 bg-slate-200    w-full box-border   p-10'
      open={isOpen}
    >
      <button
        onClick={() => setIsOpen(false)}
        className='w-16 h-16 bg-amber-200 active:scale-90 fixed flex items-center justify-center rounded-full top-20 right-20 hover:opacity-60'
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
      <div className='flex flex-col gap-10    w-full overflow-hidden '>
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
    </div>
  */
}
