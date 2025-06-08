// components/theme-switcher.tsx
'use client';

import { useTheme } from 'next-themes';
import { Palette } from 'lucide-react';
import { useThemeContext } from '@/app/theme/ThemeContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { ColorTheme } from '@/app/theme/ThemeProvider';

export default function ModeButton() {
  const { theme, setTheme } = useTheme();
  const { colorTheme, setColorTheme } = useThemeContext();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='text-foreground'
        >
          <Palette className='h-[1.2rem] w-[1.2rem]' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='w-56'
      >
        <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={colorTheme}
          onValueChange={(value) => {
            setColorTheme(value as any);
          }}
        >
          {Object.keys(ColorTheme).map((color) => (
            <DropdownMenuRadioItem
              key={color}
              value={ColorTheme[color as keyof typeof ColorTheme]}
              className='capitalize'
            >
              {ColorTheme[color as keyof typeof ColorTheme]}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Mode</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={setTheme}
        >
          <DropdownMenuRadioItem value='light'>Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='dark'>Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='system'>System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
