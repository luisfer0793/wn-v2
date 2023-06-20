import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  icon: {
    color: 'currentcolor',
  },
  menu: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
