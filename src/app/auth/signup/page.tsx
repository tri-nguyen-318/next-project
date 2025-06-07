import Link from 'next/link';
import React from 'react';
import SignUpForm from './SignUpForm';
import { AUTHEN_FORMS_MIN_WIDTH } from '@/utils/constant';

export default async function SignUpPage() {
  return (
    <div className='flex w-96 flex-col items-center justify-center rounded-lg bg-white p-8 shadow-lg'>
      <h1 className='mb-4 text-center text-2xl font-bold'>Sign Up Page</h1>
      <div
        className='flex flex-col justify-between gap-1 text-sm'
        style={{
          minWidth: AUTHEN_FORMS_MIN_WIDTH,
        }}
      >
        <SignUpForm />

        <div className='flex justify-between gap-6'>
          <p>Already have an account?</p>
          <Link
            className='underline'
            href={'/auth/signin'}
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
