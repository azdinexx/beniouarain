'use client';
import React from 'react';
import { ChevronDown } from './chevron-down';
import { NavItem } from '.';
import Link from 'next/link';
import Li from './Li';

function Dropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = React.useState(false);

  const mouseEnter = () => setOpen(true);
  const mouseLeave = () => setOpen(false);
  return (
    <div
      className='relative cursor-pointer'
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className='flex gap-2 items-center'>
        {item.title}
        <ChevronDown
          className={`${open ? 'rotate-180' : ''} transition-all duration-300`}
        />
      </div>
      {open && (
        <div className='absolute z-50 top-0 right-0 pt-8 '>
          <ul className='flex flex-col gap-1  py-3 bg-white shadow-md  border rounded-md cursor-pointer w-48'>
            {item.items &&
              item.items.map((subItem, id) => {
                return (
                  <Li
                    text={subItem.title}
                    href={subItem.href}
                    key={id + subItem.title}
                  />
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
