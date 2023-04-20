import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  section: {
    border: `.1rem solid ${theme.colors.wnSlate[2]}`,
    borderRadius: theme.radius.xs,
  },
  sectionHeader: {
    borderBottom: `.1rem solid ${theme.colors.wnSlate[2]}`,
  },
}));
