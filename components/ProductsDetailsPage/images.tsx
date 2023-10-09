import React from 'react';

function Images({ images }: { images: Array<string> }) {
  return (
    <div className='w-3/5  flex flex-col gap-8'>
      <div className='h-[35rem] border '>
        <img
          src={images[0]}
          alt='product'
          className='w-full h-full object-contain'
        />
      </div>
      <div className='  w-full bg-red-200 h-48 flex '>
        {images.map((image, index) => (
          <div key={index} className='w-1/4 h-full bg-slate-200'>
            <img
              src={image}
              alt='product'
              className='w-full h-full object-contain'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Images;
