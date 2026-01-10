import { type Context, createContext, type JSX, type ReactNode, useContext, useEffect, useState } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextType {
  theme: ViewTheme;
  toggleTheme: () => void;
}

type ViewTheme = 'light' | 'dark';

const ThemeContext: Context<ThemeContextType | null> = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const [theme, setTheme] = useState<ViewTheme>(() => {
    const saved: ViewTheme | null = localStorage.getItem('theme') as ViewTheme | null;
    return saved || 'light';
  });

  const toggleTheme: () => void = () => {
    console.log(theme);
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(): ThemeContextType {
  const context: ThemeContextType | null = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
