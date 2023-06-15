import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gap: theme.spacing.xl,
  },
  filterWrapper: {
    padding: theme.spacing.sm,
  },
}));
