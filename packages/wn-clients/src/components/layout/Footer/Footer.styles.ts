import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  footer: {
    paddingTop: 70,
    paddingBottom: 70,
    color: theme.colors.gray[5],
    backgroundColor: theme.colors.wnGreen[8],
    [theme.fn.smallerThan('md')]: {
      paddingTop: 40,
      paddingBottom: 40,
    },
  },
  footerAlt: {
    backgroundColor: theme.colors.gray[1],
  },
  grid: {
    display: 'grid',
    gap: 10,
    gridTemplateAreas: '"copyright company support media"',
    [theme.fn.smallerThan('md')]: {
      gap: 30,
      gridTemplateAreas:
        '"company company company" "support support support" "media media media" "copyright copyright copyright"',
    },
  },
  areaCopyright: {
    gridArea: 'copyright',
    [theme.fn.smallerThan('md')]: {
      textAlign: 'center',
    },
  },
  areaCompany: {
    gridArea: 'company',
  },
  areaSupport: {
    gridArea: 'support',
  },
  areaMedia: {
    gridArea: 'media',
  },
  title: {
    marginBottom: theme.spacing.xs,
    color: theme.colors.gray[0],
  },
  text: {
    fontSize: 14,
    [theme.fn.smallerThan('md')]: {
      fontSize: '13px !important',
    },
  },
  list: {
    listStyle: 'none',
    [theme.fn.smallerThan('md')]: {
      borderLeft: `.1rem solid ${theme.colors.wnGreen[6]}`,
      paddingLeft: theme.spacing.md,
    },
  },
  listItem: {
    '&:not(:last-child)': {
      marginBottom: 5,
    },
  },
}));
