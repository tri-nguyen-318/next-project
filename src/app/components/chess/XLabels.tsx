import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  xCells: any[];
  className?: string;
  position?: 'top' | 'bottom';
};

export default function XLabels({ xCells, className, position }: Props) {
  return (
    <div
      className={cn(
        'absolute flex h-8 w-full font-bold',
        position === 'top' ? '-top-8' : '-bottom-8',
        className,
      )}
    >
      {xCells.map((item) => (
        <div
          key={item}
          className='flex flex-1 items-center justify-center'
        >
          {item}
        </div>
      ))}
    </div>
  );
}
