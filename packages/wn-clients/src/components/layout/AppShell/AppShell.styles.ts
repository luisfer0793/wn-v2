import { createStyles } from '@mantine/core';
import { LAYOUT_SIZES } from 'utils/constants.util';

interface StylesProps {
  isAuthenticated: boolean;
}

export const useStyles = createStyles(
  (theme, { isAuthenticated }: StylesProps) => ({
    shell: {
      position: isAuthenticated ? 'absolute' : 'static',
      display: 'flex',
      top: 0,
      left: isAuthenticated ? LAYOUT_SIZES.NAVBAR.WIDTH : 0,
      flexDirection: 'column',
      minHeight: '100vh',
      width: isAuthenticated
        ? `calc(100% - ${LAYOUT_SIZES.NAVBAR.WIDTH}px)`
        : '100%',
    },
    main: {
      flexGrow: 1,
    },
  }),
);
