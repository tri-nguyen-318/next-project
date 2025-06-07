import Link from 'next/link';
import React from 'react';
import SignInButton from '../SignInButton';

export default function AppBar() {
  return (
    <div className='p-2 shadow flex gap-2 bg-gradient-to-br from-blue-400 to-cyan-400 text-white absolute left-0 right-0'>
      <Link href={'/'}>Home</Link>
      <Link href={'/dashboard'}>Dashboard</Link>
      <Link href={'/profile'}>Profile</Link>

      <div className='ml-auto flex items-center gap-2'>
        <SignInButton />
      </div>
    </div>
  );
}
