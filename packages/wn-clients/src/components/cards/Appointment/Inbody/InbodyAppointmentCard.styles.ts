import { createStyles } from '@mantine/core';

interface StylesProps {
  variant: string;
}

export const useStyles = createStyles((theme, { variant }: StylesProps) => {
  const color =
    {
      INFO: theme.colors.gray,
      WARNING: theme.colors.yellow,
    }[variant] || theme.colors.gray;

  return {
    card: {
      border: `.1rem solid ${theme.colors.wnSlate[3]}`,
      borderRadius: theme.radius.xs,
    },
    header: {
      paddingTop: theme.spacing.sm,
      paddingBottom: theme.spacing.sm,
      paddingRight: theme.spacing.lg,
      paddingLeft: theme.spacing.lg,
      borderBottom: `.1rem solid ${theme.colors.wnSlate[3]}`,
    },
    main: {
      paddingTop: theme.spacing.sm,
      paddingBottom: theme.spacing.sm,
      paddingRight: theme.spacing.lg,
      paddingLeft: theme.spacing.lg,
    },
    footer: {
      borderTop: `.1rem solid ${theme.colors.wnSlate[3]}`,
      paddingTop: theme.spacing.sm,
      paddingBottom: theme.spacing.sm,
      paddingRight: theme.spacing.lg,
      paddingLeft: theme.spacing.lg,
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    alert: {
      backgroundColor: color[0],
    },
    alertMessage: {
      color: color[7],
    },
    alertIcon: {
      color: color[5],
    },
    asLink: {
      cursor: 'pointer',
      color: color[6],
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  };
});
