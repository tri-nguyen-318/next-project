import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function TypopraphyCode({ children }: Props) {
  return <code className='text-foreground'>{children}</code>;
}
