import React from 'react';

type Props = { children: React.ReactNode };

export default function AuthLayout({ children }: Props) {
  return (
    <div className='flex h-full items-center justify-center bg-gradient-to-br from-lime-400 to-cyan-400'>
      {children}
    </div>
  );
}
