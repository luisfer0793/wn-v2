import { createStyles } from '@mantine/core';

interface StylesProps {
  status: 'accepted' | 'pending' | 'cancelled' | 'rejected';
}

export const useStyles = createStyles((theme, { status }: StylesProps) => {
  const color =
    {
      pending: theme.colors.yellow,
      accepted: theme.colors.wnSlate,
      rejected: theme.colors.red,
      cancelled: theme.colors.yellow,
    }[status] || theme.colors.gray;

  return {
    card: {
      border: `1px solid ${theme.colors.wnSlate[2]}`,
      borderRadius: theme.radius.xs,
    },
    main: {
      borderTop: `.1rem solid ${theme.colors.wnSlate[2]}`,
      borderBottom: `.1rem solid ${theme.colors.wnSlate[2]}`,
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: color[0],
    },
    colored: {
      color: color[7],
    },
  };
});
