import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeHolder?: string;
  onSearch: () => void;
  isSearching: boolean;
  className?: string;
};

export default function SearchInput({
  value,
  onChange,
  placeHolder,
  onSearch,
  isSearching,
  className,
}: Props) {
  return (
    <div className={cn('flex gap-1', className)}>
      <Input
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeHolder || 'Search...'}
      />
      <Button
        onClick={onSearch}
        disabled={isSearching}
      >
        {isSearching ? 'Searching...' : 'Search'}
      </Button>
    </div>
  );
}
