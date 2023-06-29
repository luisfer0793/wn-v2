import { FC } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useLocation, NavLink as Link } from 'react-router-dom';
import {
  Avatar,
  Flex,
  Group,
  MediaQuery,
  Navbar as MantineNavbar,
  NavLink,
  ScrollArea,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useTypedDispatch, useTypedSelector } from 'state/store';
import { setNavbarVisibility } from 'state/slices/layout/layout.slice';
import { navbarVisibilitySelector } from 'state/slices/layout/layout.selector';

import { LINKS } from './Navbar.utils';
import { useStyles } from './Navbar.styles';

const Navbar: FC = () => {
  const isNavbarVisible = useTypedSelector(navbarVisibilitySelector);

  const { classes, cx } = useStyles({
    isNavbarVisible,
  });

  const { pathname } = useLocation();

  const dispatch = useTypedDispatch();

  const onCloseNavbarHandler = () => {
    if (isNavbarVisible) {
      dispatch(setNavbarVisibility(false));
    }
  };

  return (
    <MantineNavbar className={classes.navbar}>
      <MantineNavbar.Section p="md">
        <Flex align="center" justify="space-between">
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
          <MediaQuery largerThan="md" styles={{ display: 'none' }}>
            <Text size="sm" fw={700} onClick={onCloseNavbarHandler}>
              Cerrar menú
            </Text>
          </MediaQuery>
        </Flex>
      </MantineNavbar.Section>
      <MantineNavbar.Section grow p="md" component={ScrollArea}>
        <Stack spacing="xl">
          <Stack spacing="md">
            <Title order={6}>Enlaces</Title>
            <Stack spacing="sm">
              {LINKS.COMMON.map(link => (
                <Group onClick={onCloseNavbarHandler}>
                  <FontAwesomeIcon icon={link.icon} size="xs" />
                  <Link
                    to={link.to}
                    key={nanoid()}
                    className={({ isActive }) =>
                      cx(classes.navlink, isActive && classes.acive)
                    }
                  >
                    {link.label}
                  </Link>
                </Group>
              ))}
            </Stack>
          </Stack>
          <Stack spacing="md">
            <Stack spacing="md">
              <Title order={6}>Profesionales de la salud</Title>
              {LINKS.HEALTH_PROFESSIONALS.map(link => (
                <Group onClick={onCloseNavbarHandler}>
                  <FontAwesomeIcon icon={link.icon} size="xs" />
                  <Link
                    to={link.to}
                    key={nanoid()}
                    className={({ isActive }) =>
                      cx(classes.navlink, isActive && classes.acive)
                    }
                  >
                    {link.label}
                  </Link>
                </Group>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};

export default Navbar;