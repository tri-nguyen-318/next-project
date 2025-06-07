import Link from 'next/link';
import React from 'react';
import SignUpForm from './SignUpForm';
import { AUTHEN_FORMS_MIN_WIDTH } from '@/utils/constant';

export default async function SignUpPage() {
  return (
    <div className='bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center'>
      <h1 className='text-center text-2xl font-bold mb-4'>Sign Up Page</h1>
      <div
        className='flex justify-between text-sm flex-col gap-1'
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
