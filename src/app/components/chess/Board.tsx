import React from 'react';
import Cell from './Cell';
import './Board.scss';
import YLabels from './YLabels';
import XLabels from './XLabels';
import { XCells, YCells } from './types/types';
import { cn } from '@/lib/utils';

export default function Board() {
  const yCells: YCells = [8, 7, 6, 5, 4, 3, 2, 1];

  const xCells: XCells = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  return (
    <div
      className={cn(
        'board relative aspect-square flex-1 overflow-hidden rounded-lg',
      )}
    >
      <YLabels
        yCells={yCells}
        position='left'
      />
      <YLabels
        yCells={yCells}
        position='right'
      />
      <XLabels
        xCells={xCells}
        position='top'
      />
      <XLabels
        xCells={xCells}
        className='bottom'
      />

      <div className={cn('board-content grid h-full grid-cols-8')}>
        {yCells.map((y, yIndex) => {
          return xCells.map((x, xIndex) => {
            return (
              <Cell
                key={`${y}${x}`}
                coordinate={{
                  x: x,
                  y: y,
                  yIndex: yIndex,
                  xIndex: xIndex,
                }}
              />
            );
          });
        })}
      </div>
    </div>
  );
}
