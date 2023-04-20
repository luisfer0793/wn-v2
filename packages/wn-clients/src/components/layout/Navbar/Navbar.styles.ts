import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  navbar: {
    backgroundColor: theme.colors.wnSlate[0],
    zIndex: 100,
  },
  navlink: {
    '&:hover': {
      color: theme.colors.orange[5],
      backgroundColor: 'initial',
    },
  },
}));
