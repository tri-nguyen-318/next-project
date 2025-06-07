import { cn } from '@/lib/utils';
import { TextColor } from '@/utils/constant';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  type?: TextColor;
};

export default function TypographyText({
  children,
  className,
  type = TextColor.PRIMARY,
}: Props) {
  return (
    <p
      className={cn('!my-1', className)}
      style={{
        color: `var(${type})`,
      }}
    >
      {children}
    </p>
  );
}
