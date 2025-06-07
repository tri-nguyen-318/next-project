import React from 'react';
import GoogleIcon from './GoogleIcon';

type Props = {
  href: string;
};

export default function GoogleSignInButton({ href }: Props) {
  return (
    <a
      href={href}
      className='flex items-center justify-center px-4 py-2 space-x-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-9'
    >
      <GoogleIcon />
      <span className='text-sm font-medium text-gray-700'>
        Sign in with Google
      </span>
    </a>
  );
}
