import { createStyles } from '@mantine/core';
import { LAYOUT_SIZES, Z_INDEXES } from 'utils/constants.util';

interface StylesProps {
  isNavbarVisible: boolean;
}

export const useStyles = createStyles(
  (theme, { isNavbarVisible }: StylesProps) => ({
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: Z_INDEXES.NAVBAR,
      width: LAYOUT_SIZES.NAVBAR.WIDTH,
      backgroundColor: theme.colors.wnSlate[0],
      transition: 'transform linear 150ms 150ms',
      [theme.fn.smallerThan('md')]: {
        transform: isNavbarVisible ? 'translateX(0)' : 'translateX(-100%)',
        width: '100%',
      },
    },
    avatarGroup: {
      padding: theme.spacing.xs,
      borderRadius: theme.radius.sm,
      border: `1px solid ${theme.colors.wnSlate[3]}`,
    },
    navlink: {
      fontSize: theme.fontSizes.sm,
      textDecoration: 'none',
      color: 'currentcolor',
      '&:hover': {
        color: theme.colors.orange[5],
      },
    },
    acive: {
      color: theme.colors.orange[5],
    },
  }),
);