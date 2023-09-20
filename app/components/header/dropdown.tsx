'use client';
import React from 'react';
import { ChevronDown } from './chevron-down';
function Dropdown({ title, items }: { title: string; items: string[] }) {
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
        {title}
        <ChevronDown
          className={`${open ? 'rotate-180' : ''} transition-all duration-300`}
        />
      </div>
      {open && (
        <div className='absolute z-50 top-0 right-0 pt-8 '>
          <ul className='flex flex-col gap-4 px-4 py-3 bg-slate-200/10  border rounded-md cursor-pointer w-48'>
            {items.map((item, id) => {
              return <li key={id + item}>{item}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
