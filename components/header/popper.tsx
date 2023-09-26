'use client';
import React, { useState, useEffect } from 'react';
import { ChevronDown } from './chevron-down';
import { NavItem } from '.';
import Li from './Li';

function Popper({
  item,
  children,
}: {
  item: NavItem;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    setIsOpen(true);
    // If there's a timeout in progress, clear it
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  const handleMouseLeave = () => {
    // Delay the closing action by 500 milliseconds (adjust as needed)
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 500);

    // Save the timeout ID so it can be cleared if the mouse enters again
    setTimeoutId(id);
  };

  // Clear the timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <div
      className='relative inline-block text-left  '
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsOpen(!isOpen)}
    >
      <button
        className={`flex gap-1 px-3 py-1 uppercase items-center  justify-center ${
          isOpen ? 'text-amber-500 bg-amber-50' : 'text-gray-500'
        }`}
        onMouseEnter={handleMouseEnter}
      >
        {item.title}
        <ChevronDown
          className={`w-4 h-4 ${
            isOpen ? 'rotate-180' : ''
          } transition-transform duration-100`}
        />
      </button>
      <div
        className={`origin-top-right absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
          isOpen
            ? 'opacity-100 translate-y-0  scale-100'
            : 'opacity-0 -translate-y-8 pointer-events-none scale-75'
        } transition-transform  duration-100 ease-in-out z-10`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </div>
  );
}

export default Popper;
