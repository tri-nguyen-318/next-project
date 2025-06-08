'use client';

import React, { useEffect } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useThemeContext } from './ThemeContext';

export enum ColorTheme {
  DEFAULT = 'default',
  RED = 'red',
  ROSE = 'rose',
  ORANGE = 'orange',
  GREEN = 'green',
  BLUE = 'blue',
  YELLOW = 'yellow',
  VIOLET = 'violet',
}
export type ModeTheme = 'light' | 'dark' | 'system';

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const { colorTheme } = useThemeContext();

  useEffect(() => {
    // Set the data-theme attribute on the HTML element
    document.documentElement.setAttribute('data-theme', colorTheme);

    // Cleanup function to remove the attribute when component unmounts
    return () => {
      document.documentElement.removeAttribute('data-theme');
    };
  }, [colorTheme]);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
