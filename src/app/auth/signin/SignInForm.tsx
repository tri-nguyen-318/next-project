'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SubmitButton from '@/components/ui/submitButton';
import { signIn } from '@/lib/auth';
import Link from 'next/link';
import React, { useActionState } from 'react';

export default function SignInForm() {
  const [state, action] = useActionState(signIn, undefined);

  return (
    <form action={action}>
      <div className='flex flex-col gap-2'>
        {state?.message && (
          <div className='text-sm text-red-500'>{state.message}</div>
        )}

        <div>
          <Label
            htmlFor='email'
            className='mb-1'
          >
            Email
          </Label>
          <Input
            id='email'
            name='email'
            placeholder='john@example.com'
          />

          {state?.error?.email && (
            <div className='text-sm text-red-500'>
              {state.error.email.map((error) => (
                <div key={error}>{error}</div>
              ))}
            </div>
          )}
        </div>

        <div>
          <Label
            htmlFor='password'
            className='mb-1'
          >
            Password
          </Label>
          <Input
            id='password'
            name='password'
            type='password'
          />

          {state?.error?.password && (
            <div className='text-sm text-red-500'>
              <p>Password must:</p>
              <ul>
                {state.error.password.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className='mt-1'>
        <Link
          className='text-sm underline'
          href={'#'}
        >
          Forgot your password?
        </Link>
      </div>
      <SubmitButton>Sign In</SubmitButton>
    </form>
  );
}
