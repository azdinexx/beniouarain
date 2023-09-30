import React from 'react';

const dd = [1, 0, 1];
async function page() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
        return (
          <div className='w-full flex flex-col gap-2' key={item}>
            <div
              className={`w-full h-72 bg-gray-100 ${
                dd[item] === 1 ? 'col-span-2' : ''
              }`}
            >
              {item}
            </div>
            <span className='text-transparent bg-gray-300 w-fit'>
              dddddddddddd
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default page;
