import { type JSX, type ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  return <>{children}</>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(): never {
  throw new Error('useTheme must be used within ThemeProvider');
}
