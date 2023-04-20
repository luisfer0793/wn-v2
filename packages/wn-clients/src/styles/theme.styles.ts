import { MantineTheme, MantineThemeOverride, Tuple } from '@mantine/core';

const wnSlate: Tuple<string, 10> = [
  '#F8FAFC',
  '#F1F5F9',
  '#E2E8F0',
  '#CBD5E1',
  '#94A3B8',
  '#64748B',
  '#475569',
  '#334155',
  '#1E293B',
  '#0F172A',
];

const wnGreen: Tuple<string, 10> = [
  '#d5e4e4',
  '#abc9c9',
  '#80afaf',
  '#569494',
  '#2c7979',
  '#236161',
  '#1f5555',
  '#1a4949',
  '#123030',
  '#091818',
];

export const Theme: MantineThemeOverride = {
  fontFamily: "'Outfit', sans-serif",
  headings: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 700,
  },
  colors: {
    wnSlate,
    wnGreen,
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
    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1140,
          xl: 1440,
        },
      },
    },
    Drawer: {
      styles: (theme: MantineTheme) => ({
        drawer: {
          padding: `${theme.spacing.xl}px !important`,
        },
        header: {
          paddingTop: theme.spacing.xl,
          paddingBottom: theme.spacing.xl,
        },
        title: {
          fontWeight: 700,
          textAlign: 'center' as const,
          flexGrow: 1,
          textTransform: 'uppercase' as const,
        },
      }),
    },
  },
};
