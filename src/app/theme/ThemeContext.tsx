'use client';

import * as React from 'react';
import { ColorTheme } from './ThemeProvider';

type ThemeContextType = {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined,
);

export function useThemeContext() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useThemeContext must be used within a ThemeContextProvider',
    );
  }
  return context;
}

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorTheme, setColorTheme] = React.useState<ColorTheme | undefined>(
    undefined,
  );

  const setColorThemeWrapper = (theme: ColorTheme) => {
    setColorTheme(theme);
    localStorage.setItem('data-theme', theme);
  };

  React.useEffect(() => {
    const defaultTheme = localStorage?.getItem('data-theme') as ColorTheme;
    setColorTheme(defaultTheme || ColorTheme.VIOLET);
  }, []);

  if (!colorTheme) {
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{ colorTheme, setColorTheme: setColorThemeWrapper }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
