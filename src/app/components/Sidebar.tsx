'use client';
import { chessActions } from '@/redux/chess/slice';
import { useAppDispatch } from '@/redux/hooks';
import { useTimer } from 'react-timer-hook';
import React from 'react';
import dayjs from 'dayjs';
import { Button } from '@/components/ui/button';

export default function Sidebar() {
  const dispatch = useAppDispatch();

  const { seconds, minutes, start } = useTimer({
    expiryTimestamp: dayjs().add(15, 'minutes').toDate(),
    autoStart: false,
    onExpire: () => {},
    interval: 1000,
  });

  const onNewGame = () => {
    dispatch(chessActions.newNormalGame());
  };

  return (
    <div className='flex h-full basis-xs flex-col gap-2 p-4 md:min-w-64'>
      <div
        className='flex justify-center text-5xl font-medium'
        style={{
          color: 'var(--color-blue-600)',
        }}
      >
        <div>{minutes}</div>
        <div>:</div>
        <div>{String(seconds).length !== 1 ? seconds : `0${seconds}`}</div>
      </div>

      <Button
        variant='default'
        onClick={() => {
          start();
        }}
      >
        Start game
      </Button>
      <Button onClick={onNewGame}>New game</Button>
    </div>
  );
}
