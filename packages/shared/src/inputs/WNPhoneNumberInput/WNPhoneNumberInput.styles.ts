import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  container: {
    marginTop: '.5rem',
    marginBottom: '.5rem',
  },
  input: {
    width: '100%',
  },
  bordered: {
    borderColor: theme.colors.gray[4],
  },
  error: {
    borderColor: theme.colors.red[6],
  },
}));
