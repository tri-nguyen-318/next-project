'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from './button';

type Props = { children: React.ReactNode };

export default function SubmitButton({ children }: Props) {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      aria-disabled={pending}
      className='mt-2 w-full'
    >
      {children}
    </Button>
  );
}
