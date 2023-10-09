import React from 'react';

function RecommendedProducts() {
  return (
    <div className='w-full    flex flex-col  gap-5   mt-10'>
      <p className='font-bold text-xl'>Recommended Products</p>
      <div className='grid grid-cols-4 gap-5'>
        <div className='h-48 bg-slate-200 w-full'>edf</div>
        <div className='h-48 bg-slate-200 w-full'>edf</div>
        <div className='h-48 bg-slate-200 w-full'>edf</div>
        <div className='h-48 bg-slate-200 w-full'>edf</div>
      </div>
    </div>
  );
}

export default RecommendedProducts;
