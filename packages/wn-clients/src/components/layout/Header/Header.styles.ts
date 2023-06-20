import { createStyles } from '@mantine/core';

interface StylesProps {
  isSideBarOpen: boolean;
}

export const useStyles = createStyles(
  (theme, { isSideBarOpen }: StylesProps) => ({
    header: {
      borderBottom: `1px solid ${theme.colors.wnSlate[2]}`,
    },
    sidebar: {
      position: 'fixed',
      display: 'flex',
      padding: theme.spacing.md,
      height: `calc(100vh - 70px)`,
      width: '100%',
      top: 70,
      left: 0,
      zIndex: 10,
      opacity: isSideBarOpen ? 1 : 0,
      transition: 'transform linear 300ms, opacity linear 300ms',
      transform: isSideBarOpen ? 'translateX(0)' : 'translateX(100%)',
      color: theme.colors.dark[9],
      backgroundColor: theme.colors.gray[1],
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  }),
);
