import React from 'react';

type Props = { children: React.ReactNode };

export default function AuthLayout({ children }: Props) {
  return (
    <div className='bg-gradient-to-br from-lime-400 to-cyan-400 h-full flex items-center justify-center'>
      {children}
    </div>
  );
}
