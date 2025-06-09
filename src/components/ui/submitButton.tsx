'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import ButtonLoading from './loadingButton';

type Props = { children: React.ReactNode };

export default function SubmitButton({ children }: Props) {
  const { pending } = useFormStatus();

  return (
    <ButtonLoading
      type='submit'
      isLoading={pending}
      className='mt-2 w-full'
    >
      {children}
    </ButtonLoading>
  );
}
