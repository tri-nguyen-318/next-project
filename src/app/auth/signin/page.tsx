import React from 'react';
import SignInForm from './SignInForm';
import Footer from './Footer';
import { BACKEND_URL } from '@/lib/constants';
import GoogleSignInButton from '@/components/common/GoogleSignInButton';
import { AUTHEN_FORMS_MIN_WIDTH } from '@/utils/constant';

export default function SignInPage() {
  return (
    <div className='bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center'>
      <h1 className='text-center text-2xl font-bold mb-4'>Sign In Page</h1>
      <div
        className='flex justify-between text-sm flex-col gap-1'
        style={{
          minWidth: AUTHEN_FORMS_MIN_WIDTH,
        }}
      >
        <SignInForm />

        <Footer />

        <hr className='pb-2 mt-2' />

        <div className='mt-1'>
          <GoogleSignInButton href={`${BACKEND_URL}/auth/google/login`} />
        </div>
      </div>
    </div>
  );
}
