import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  header: {
    borderBottom: `1px solid ${theme.colors.wnSlate[2]}`,
  },
  headerWrapper: {
    display: 'flex',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
