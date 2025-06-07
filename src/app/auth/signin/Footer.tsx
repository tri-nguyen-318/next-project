'use client';

import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className='flex gap-6 justify-between'>
      <p>Don&apos;t have account</p>
      <Link
        className='underline'
        href={'/auth/signup'}
      >
        Sign Up
      </Link>
    </div>
  );
}
