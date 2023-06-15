import { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useLocation } from 'react-router-dom';
import {
  Avatar,
  Group,
  Navbar as MantineNavbar,
  NavLink,
  ScrollArea,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { LAYOUT_SIZES } from 'utils/constants.util';

import { LINKS } from './Navbar.utils';

import { useStyles } from './Navbar.styles';

const Navbar: FC = () => {
  const { classes } = useStyles();

  const { pathname } = useLocation();

  return (
    <MantineNavbar
      fixed
      width={{ base: LAYOUT_SIZES.NAVBAR.WIDTH }}
      className={classes.navbar}
    >
      <MantineNavbar.Section p="md">
        <Group className={classes.avatarGroup}>
          <Avatar size={50} color="indigo">
            LF
          </Avatar>
          <div>
            <Title order={6}>Fernando Jiménez</Title>
            <Text size="xs" color="dimmed">
              Cliente Wellnub
            </Text>
          </div>
        </Group>
      </MantineNavbar.Section>
      <MantineNavbar.Section grow p="md" component={ScrollArea}>
        <Stack spacing="xl">
          <section>
            <Title order={6}>Enlaces</Title>
            {LINKS.COMMON.map(link => (
              <NavLink
                {...link}
                key={nanoid()}
                color="orange"
                variant="subtle"
                icon={<FontAwesomeIcon icon={link.icon} size="xs" />}
                active={pathname.includes(link.label.toLowerCase())}
                classNames={{
                  root: classes.navlink,
                }}
              />
            ))}
          </section>
          <section>
            <Title order={6}>Profesionales de la salud</Title>
            {LINKS.HEALTH_PROFESSIONALS.map(link => (
              <NavLink
                {...link}
                key={nanoid()}
                color="orange"
                variant="subtle"
                icon={<FontAwesomeIcon icon={link.icon} size="xs" />}
                active={pathname.includes(link.label.toLowerCase())}
                classNames={{
                  root: classes.navlink,
                }}
              />
            ))}
          </section>
        </Stack>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};

export default Navbar;
