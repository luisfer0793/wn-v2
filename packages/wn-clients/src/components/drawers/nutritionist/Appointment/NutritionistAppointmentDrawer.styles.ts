import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  section: {
    border: `1px solid ${theme.colors.wnSlate[3]}`,
  },
  sectionHeader: {
    borderBottom: `1px solid ${theme.colors.wnSlate[3]}`,
  },
  sectionFooter: {
    borderTop: `1px solid ${theme.colors.wnSlate[3]}`,
  },
}));
