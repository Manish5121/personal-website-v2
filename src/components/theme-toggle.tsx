import { useStore } from '@nanostores/react';

import { Button } from '~/components/ui/button';
import { MoonIcon, SunIcon } from '~/components/ui/icons';
import { THEME_MAP, themeStore } from '~/libs/stores/theme';

export default function ThemeToggle() {
  const theme = useStore(themeStore);
  const isDark = theme === THEME_MAP.dark;

  const toggleTheme = () => {
    themeStore.set(isDark ? THEME_MAP.light : THEME_MAP.dark);
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}