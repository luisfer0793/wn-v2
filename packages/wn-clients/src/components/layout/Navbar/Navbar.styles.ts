import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  navbar: {
    backgroundColor: theme.colors.wnSlate[0],
    zIndex: 100,
  },
  avatarGroup: {
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    border: `1px solid ${theme.colors.wnSlate[3]}`,
  },
  navlink: {
    '&:hover': {
      color: theme.colors.orange[5],
      backgroundColor: 'initial',
    },
  },
}));
