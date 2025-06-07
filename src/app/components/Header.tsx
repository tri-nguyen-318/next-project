import React from 'react';

export default function Header() {
  return (
    <div className=''>
      <h1 className='mb-2 text-center font-semibold'>To do App</h1>
      <div className='mx-auto flex items-center justify-around border p-1'>
        <div>Summary</div>
        <div>Status</div>
      </div>
    </div>
  );
}
