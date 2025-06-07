'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SubmitButton from '@/components/ui/submitButton';
import { signUp } from '@/lib/auth';
import React, { useActionState } from 'react';

export default function SignUpForm() {
  const [state, action] = useActionState(signUp, undefined);

  return (
    <form action={action}>
      <div className='flex flex-col gap-2'>
        {state?.message && (
          <div className='text-sm text-red-500'>{state.message}</div>
        )}

        <div>
          <Label
            htmlFor='name'
            className='mb-1'
          >
            Name
          </Label>
          <Input
            id='name'
            name='name'
            placeholder={'johnDoe'}
          />

          {state?.error?.name && (
            <div className='text-sm text-red-500'>
              {state.error.name.map((error) => (
                <div key={error}>{error}</div>
              ))}
            </div>
          )}
        </div>

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

      <SubmitButton>Sign Up</SubmitButton>
    </form>
  );
}
