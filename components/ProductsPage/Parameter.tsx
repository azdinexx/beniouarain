'use client';
import { useState, useRef } from 'react';
import { ChevronDown } from '../header/chevron-down';
function Parameter({
  title,
  items,
  leftORright,
}: {
  title: string;
  items: string[];
  leftORright?: boolean;
}) {
  const summaryRef = useRef<HTMLDetailsElement>(null);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [show, setShow] = useState(false);

  const open = () => {
    summaryRef.current?.setAttribute('open', 'true');
    setShow(true);
  };

  const close = () => {
    detailsRef.current?.removeAttribute('open');
    setShow(false);
  };
  return (
    <details className='relative ' ref={detailsRef}>
      <summary
        ref={summaryRef}
        className={`border p-3 rounded-md hover:ring-1 select-none cursor-pointer list-none flex items-center justify-between gap-5  relative z-0   `}
        onClick={open}
      >
        {title}
        <ChevronDown
          className={`transform transition-transform duration-300 ${
            show ? 'rotate-180' : ''
          }`}
        />
      </summary>
      <div
        className='   z-10    w-screen h-screen fixed top-0 left-0 overflow-hidden shadow-xl'
        onClick={close}
      ></div>
      <div
        className={` shadow-lg absolute top-16 ${
          leftORright ? 'left-0' : 'right-0'
        } w-48 z-20  bg-white flex flex-col border rounded-md`}
      >
        <span className='flex justify-between border-b p-2 font-bold'>
          <span>
            <button className='border text-sm p-1 rounded-md'>0</button>{' '}
            selected
          </span>
          <button className='border text-sm p-1 rounded-md'>Clear</button>
        </span>
        <div className=''>
          {items.map((item, i) => {
            return (
              <div
                className='border-b border-gray-100 px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer '
                key={item + i}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </details>
  );
}

export default Parameter;
