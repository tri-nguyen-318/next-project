import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function ErrorMessage({ children }: Props) {
  return <div className='text-sm text-red-400'>{children}</div>;
}
