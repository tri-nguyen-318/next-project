import React, { ComponentProps } from 'react';
import { Button } from './button';
import { Loader2Icon } from 'lucide-react';

type Props = ComponentProps<typeof Button> & {
  isLoading?: boolean;
};

export default function ButtonLoading({
  children,
  isLoading,
  ...props
}: Props) {
  return (
    <Button
      {...props}
      disabled={isLoading}
    >
      {isLoading && <Loader2Icon className='animate-spin' />}
      {children}
    </Button>
  );
}
