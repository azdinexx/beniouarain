import React from 'react';
import { Search } from './search';

function SearchBadge() {
  return (
    <div className='relative cursor-pointer hover:bg-gray-50 rounded-full aspect-square flex justify-center items-center'>
      <Search />
    </div>
  );
}

export default SearchBadge;
