import { persistentAtom } from '@nanostores/persistent';
import { onMount } from 'nanostores';

export const THEME_MAP = {
  light: 'light',
  dark: 'dark',
} as const;

export type ThemeKey = keyof typeof THEME_MAP;
export type ThemeValue = (typeof THEME_MAP)[ThemeKey];

export const STORAGE_THEME_KEY = 'theme' as const;

export const themeStore = persistentAtom<ThemeValue>(
  STORAGE_THEME_KEY,
  THEME_MAP.light,
);

const initThemeStoreSubscribe = () => {
  const applyTheme = (theme: ThemeValue) => {
    if (theme === THEME_MAP.dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  themeStore.subscribe((theme) => {
    applyTheme(theme);
  });
};

if (typeof window !== 'undefined') {
  onMount(themeStore, () => {
    initThemeStoreSubscribe();
  });
}