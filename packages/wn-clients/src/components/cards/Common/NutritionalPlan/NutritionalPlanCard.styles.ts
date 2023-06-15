import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  card: {
    borderRadius: theme.radius.xs,
    border: `1px solid ${theme.colors.wnSlate[2]}`,
  },
  main: {
    position: 'relative',
    borderTop: `.1rem solid ${theme.colors.wnSlate[2]}`,
    borderBottom: `.1rem solid ${theme.colors.wnSlate[2]}`,
  },
  footer: {
    backgroundColor: theme.colors.wnSlate[1],
  },
  badge: {
    position: 'absolute',
    right: theme.spacing.lg,
    top: theme.spacing.sm,
  },
}));
