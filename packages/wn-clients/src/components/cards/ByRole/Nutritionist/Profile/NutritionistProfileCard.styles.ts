import { createStyles } from '@mantine/core';

interface StylesProps {
  banner: string;
}

export const useStyles = createStyles((theme, { banner }: StylesProps) => ({
  card: {
    // display: 'grid',
    // gridTemplateColumns: '2fr 1fr',
    textAlign: 'center',
    borderRadius: theme.radius.xs,
    boxShadow:
      'rgba(0, 0, 0, 0.1) 0px 1px 3px, rgba(0, 0, 0, 0.1) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px',
    overflow: 'hidden',
    backgroundColor: theme.colors.gray[0],
    [theme.fn.smallerThan('xs')]: {
      gridTemplateColumns: '1fr',
    },
  },
  header: {
    height: '120px',
    backgroundImage: `linear-gradient(to right, rgba(0, 82, 73, .7), rgba(0, 82, 73, .7)), url("${
      banner ||
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bnV0cmljaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
    }")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  avatarWrapper: {
    position: 'absolute',
    top: 70,
    left: '50%',
    width: 95,
    height: 95,
    minWidth: 90,
    padding: 5,
    transform: 'translateX(-50%)',
    borderRadius: '50%',
    backgroundColor: theme.colors.wnGreen[0],
  },
  main: {
    paddingTop: 50,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: 20,
  },
  specialtiesSection: {
    backgroundColor: theme.colors.wnGreen[8],
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
    paddingRight: theme.spacing.sm,
    paddingLeft: theme.spacing.sm,
  },
  badge: {
    fontWeight: 400,
    textTransform: 'capitalize',
    color: theme.colors.wnGreen[0],
    backgroundColor: theme.colors.wnGreen[4],
  },
  footer: {
    backgroundColor: theme.colors.gray[2],
  },
  infoWrapper: {
    position: 'relative',
  },
  // indicator: {
  //   position: 'absolute',
  //   top: '-10',
  //   left: 60,
  //   zIndex: 10,
  // },
}));
