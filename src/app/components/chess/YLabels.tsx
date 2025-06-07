import React from 'react';
import clsx from 'clsx';

type Props = {
  yCells: any[];
  className?: string;
  position?: 'left' | 'right';
};

export default function YLabels({ yCells, className, position }: Props) {
  return (
    <div
      className={clsx(
        'absolute flex h-full w-8 flex-col items-center font-bold',
        position === 'left' ? '-left-8' : '-right-8',
        className,
      )}
    >
      {yCells.map((item) => (
        <div
          key={item}
          className='flex w-full flex-1 items-center justify-center'
        >
          {item}
        </div>
      ))}
    </div>
  );
}
