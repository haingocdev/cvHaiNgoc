import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ThemeContext } from './theme-context';
import { STORAGE_KEYS, THEME_MODES } from '@/constants';
import type { ThemeMode } from '@/types';

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return THEME_MODES.LIGHT;

  const stored = localStorage.getItem(STORAGE_KEYS.THEME);
  if (stored === THEME_MODES.LIGHT || stored === THEME_MODES.DARK) {
    return stored;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? THEME_MODES.DARK
    : THEME_MODES.LIGHT;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === THEME_MODES.DARK);
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  const setTheme = useCallback((next: ThemeMode) => {
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === THEME_MODES.DARK ? THEME_MODES.LIGHT : THEME_MODES.DARK));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === THEME_MODES.DARK,
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
