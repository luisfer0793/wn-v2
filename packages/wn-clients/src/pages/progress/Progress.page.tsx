import { FC, Fragment } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { nanoid } from '@reduxjs/toolkit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { NAVIGATION_SETTINGS_LINKS } from './Progress.utils';
import { useStyles } from './Progress.styles';

const ProgressPage: FC = () => {
  const { classes, cx } = useStyles();

  return (
    <Fragment>
      <Box component="header" className={classes.header}>
        <Group position="apart">
          <Group>
            <Box className={classes.avatarWrapper}>
              <Avatar
                size={100}
                radius="50%"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
              >
                LF
              </Avatar>
            </Box>
            <Stack spacing={2}>
              <Title order={4}>Luis Fernando Jiménez</Title>
              <Text size="sm" className={classes.colorLight}>
                luisfer.0793@gmail.com
              </Text>
              <Group spacing="lg">
                <Group spacing="xs">
                  <FontAwesomeIcon icon={faLocationDot} size="sm" />
                  <Text size="sm">CDMX, México</Text>
                </Group>
                <Group spacing="xs">
                  <FontAwesomeIcon icon={faLocationDot} size="sm" />
                  <Text size="sm">CDMX, México</Text>
                </Group>
              </Group>
            </Stack>
          </Group>
          <Stack>
            <Group>
              <Stack spacing={1}>
                <Title order={4} align="center" size={20}>
                  15
                </Title>
                <Text align="center" size="sm">
                  Pases
                </Text>
              </Stack>
              <Stack spacing={1}>
                <Title order={4} align="center" size={20}>
                  15
                </Title>
                <Text align="center" size="sm">
                  Pruebas
                </Text>
              </Stack>
            </Group>
            <Button color="lime">Editar perfil</Button>
          </Stack>
        </Group>
        <Box component="nav" mt="sm">
          <Box component="ul" className={classes.navbarList}>
            {NAVIGATION_SETTINGS_LINKS.map(item => (
              <li key={nanoid()}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cx(classes.navbarLink, isActive && classes.active)
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </Box>
        </Box>
      </Box>
      <Box component="section">
        <Container fluid py={16}>
          <Outlet />
        </Container>
      </Box>
    </Fragment>
  );
};

export default ProgressPage;
