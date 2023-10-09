import React from 'react';
import Parameter from './Parameter';

function Hero() {
  return (
    <section>
      <h1 className='py-6 text-5xl'>All Products</h1>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <span className='py-3'>Filter By:</span>
          <div className='flex gap-3'>
            <Parameter
              title='Price'
              items={[
                '$0 - $25',
                '$25 - $50',
                '$50 - $100',
                '$100 - $200',
                '$200+',
              ]}
              leftORright
            />{' '}
            <Parameter
              title='Price'
              items={[
                '$0 - $25',
                '$25 - $50',
                '$50 - $100',
                '$100 - $200',
                '$200+',
              ]}
              leftORright
            />{' '}
            <Parameter
              title='Price'
              items={[
                '$0 - $25',
                '$25 - $50',
                '$50 - $100',
                '$100 - $200',
                '$200+',
              ]}
              leftORright
            />{' '}
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='py-3'>Sort By:</span>
          <div className='flex gap-3'>
            <Parameter
              title='Price'
              items={[
                '$0 - $25',
                '$25 - $50',
                '$50 - $100',
                '$100 - $200',
                '$200+',
              ]}
            />{' '}
            <Parameter
              title='Price'
              items={[
                '$0 - $25',
                '$25 - $50',
                '$50 - $100',
                '$100 - $200',
                '$200+',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
