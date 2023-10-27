import React from 'react';
import { Englebert } from 'next/font/google';

const font = Englebert({
  weight: '400',
  subsets: ['latin'],
});

function Announcement() {
  return (
    <div
      className={`py-1 text-sm md:text-lg  text-amber-800 bg-amber-50/20 border-b text-center ${font.className}`}
    >
      🔥🔥 FREE SHIPPING ON ALL US ORDERS + 10% OFF DISCOUNT
    </div>
  );
}

export default Announcement;
