import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function TypographyH1({ children }: Props) {
  return <h1 className='text-foreground mb-0 h-fit font-bold'>{children}</h1>;
}
