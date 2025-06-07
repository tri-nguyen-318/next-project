import React from 'react';
import GoogleIcon from './GoogleIcon';

type Props = {
  href: string;
};

export default function GoogleSignInButton({ href }: Props) {
  return (
    <a
      href={href}
      className='flex h-9 items-center justify-center space-x-2 rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none'
    >
      <GoogleIcon />
      <span className='text-sm font-medium text-gray-700'>
        Sign in with Google
      </span>
    </a>
  );
}
