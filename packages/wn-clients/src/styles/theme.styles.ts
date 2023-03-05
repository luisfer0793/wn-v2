import { MantineThemeOverride } from '@mantine/core';

export const Theme: MantineThemeOverride = {
  fontFamily: "'Outfit', sans-serif",
  headings: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 700,
  },
  components: {
    Text: {
      defaultProps: {
        component: 'p',
      },
    },
    Alert: {
      styles: () => ({
        title: {
          marginBottom: 0,
        },
      }),
    },
  },
};
