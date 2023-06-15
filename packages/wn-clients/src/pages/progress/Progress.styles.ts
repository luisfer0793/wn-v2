import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  header: {
    padding: theme.spacing.xl,
    backgroundImage: `linear-gradient(to top, rgba(9, 24, 24, 0.8), rgba(35, 97, 97, .8)), url("https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3412&q=80")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: theme.colors.wnSlate[0],
  },
  navbarList: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
  },
  navbarLink: {
    position: 'relative',
    display: 'inline-block',
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    marginLeft: theme.spacing.md,
    marginRight: theme.spacing.md,
    color: theme.colors.wnSlate[2],
    textDecoration: 'none',
    transition: 'color linear 100ms',
    '&:hover': {
      color: theme.colors.lime[5],
    },
  },
  active: {
    color: theme.colors.lime[5],
    '&:after': {
      position: 'absolute',
      bottom: -1,
      right: 0,
      content: "''",
      width: '100%',
      height: '.1rem',
      borderRadius: theme.radius.lg,
      backgroundColor: theme.colors.lime[5],
    },
  },
  avatarWrapper: {
    padding: 3,
    borderRadius: '50%',
    backgroundColor: theme.colors.wnSlate[2],
  },
  colorLight: {
    color: theme.colors.wnSlate[3],
  },
}));
