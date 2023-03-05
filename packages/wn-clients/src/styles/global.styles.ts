import { MantineTheme } from '@mantine/core';

export const globalStyles = (theme: MantineTheme) => ({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
  },
  body: {
    fontWeight: 400,
    fontSize: 16,
    letterSpacing: 0.2,
    wordSpacing: 1,
    color: theme.colors.gray[8],
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
});
