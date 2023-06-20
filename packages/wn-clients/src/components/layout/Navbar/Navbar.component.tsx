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
    dispatch(setNavbarVisibility(false));
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
          <section>
            <Title order={6}>Enlaces</Title>
            {LINKS.COMMON.map(link => (
              <Link
                to={link.to}
                key={nanoid()}
                color="orange"
                // variant="subtle"
                // icon={<FontAwesomeIcon icon={link.icon} size="xs" />}
                className={({ isActive }) => cx(isActive && classes.navlink)}
              >
                {link.label}
              </Link>
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
