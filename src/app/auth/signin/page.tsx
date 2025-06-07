import React from 'react';
import SignInForm from './SignInForm';
import Footer from './Footer';
import { BACKEND_URL } from '@/lib/constants';
import GoogleSignInButton from '@/components/common/GoogleSignInButton';
import { AUTHEN_FORMS_MIN_WIDTH } from '@/utils/constant';

export default function SignInPage() {
  return (
    <div className='flex w-96 flex-col items-center justify-center rounded-lg bg-white p-8 shadow-lg'>
      <h1 className='mb-4 text-center text-2xl font-bold'>Sign In Page</h1>
      <div
        className='flex flex-col justify-between gap-1 text-sm'
        style={{
          minWidth: AUTHEN_FORMS_MIN_WIDTH,
        }}
      >
        <SignInForm />

        <Footer />

        <hr className='mt-2 pb-2' />

        <div className='mt-1'>
          <GoogleSignInButton href={`${BACKEND_URL}/auth/google/login`} />
        </div>
      </div>
    </div>
  );
}
