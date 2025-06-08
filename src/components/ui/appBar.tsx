import Link from 'next/link';
import React from 'react';
import SignInButton from '../SignInButton';
import ModeButton from '../common/ModeButton';

export default function AppBar() {
  return (
    <>
      <div className='bg-primary text-primary-foreground absolute right-0 left-0 flex gap-2 p-2 font-medium shadow'>
        <Link href={'/'}>Home</Link>
        <Link href={'/dashboard'}>Dashboard</Link>
        <Link href={'/profile'}>Profile</Link>
        <Link href={'/invoice'}>Invoice</Link>

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
