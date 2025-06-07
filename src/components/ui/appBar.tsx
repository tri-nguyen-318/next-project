import Link from 'next/link';
import React from 'react';
import SignInButton from '../SignInButton';

export default function AppBar() {
  return (
    <div className='absolute right-0 left-0 flex gap-2 bg-gradient-to-br from-blue-400 to-cyan-400 p-2 text-white shadow'>
      <Link href={'/'}>Home</Link>
      <Link href={'/dashboard'}>Dashboard</Link>
      <Link href={'/profile'}>Profile</Link>
      <Link href={'/search'}>Search</Link>

      <div className='ml-auto flex items-center gap-2'>
        <SignInButton />
      </div>
    </div>
  );
}
