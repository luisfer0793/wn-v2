import { MantineColor, MantineTheme } from '@mantine/core';
import { ToastVariant } from 'utils/types.util';

type ToastColorProps = {
  [variant in ToastVariant]: MantineColor;
};

const toastStyleHelper = (variant: ToastVariant) => (theme: MantineTheme) => {
  const color =
    {
      success: theme.colors.green,
      warning: theme.colors.orange,
      info: theme.colors.cyan,
      error: theme.colors.red,
    }[variant as unknown as keyof ToastColorProps] || theme.colors.grape;

  return {
    root: {
      backgroundColor: color[1],
      borderColor: color[2],
      '&::before': {
        backgroundColor: color[7],
        width: '.3rem',
      },
    },
    title: {
      fontWeight: 700,
      color: color[7],
    },
    description: {
      color: theme.colors.dark[4],
    },
    closeButton: {
      color: theme.colors.dark[4],
      '&:hover': {
        backgroundColor: color[2],
      },
    },
  };
};

export default toastStyleHelper;
