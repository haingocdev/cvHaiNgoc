import { createContext } from 'react';
import type { ThemeMode } from '@/types';

export interface ThemeContextValue {
  theme: ThemeMode;
  isDark: boolean;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
