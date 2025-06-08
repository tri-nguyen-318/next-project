import Link from 'next/link';
import React from 'react';
import SignInButton from '../SignInButton';
import ModeButton from '../common/ModeButton';

export default function AppBar() {
  return (
    <>
      <div className='bg-primary text-primary-foreground flex h-10 justify-between gap-2 p-2 font-medium shadow'>
        <div className='flex items-center gap-2'>
          <Link href={'/'}>Home</Link>
          <Link href={'/dashboard'}>Dashboard</Link>
          <Link href={'/profile'}>Profile</Link>
          <Link href={'/invoice'}>Invoice</Link>
        </div>

        <div className='ml-auto flex items-center gap-2'>
          <SignInButton />
        </div>
      </div>

      <div className='absolute right-2 bottom-2 z-10'>
        <ModeButton />
      </div>
    </>
  );
}
