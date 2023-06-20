import { FC, Fragment, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Burger,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  Indicator,
  MediaQuery,
  Stack,
  Text,
} from '@mantine/core';
import { useToggle } from '@mantine/hooks';

import { nanoid } from '@reduxjs/toolkit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import { useTypedDispatch, useTypedSelector } from 'state/store';
import { setNavbarVisibility } from 'state/slices/layout/layout.slice';
import { isAuthenticatedSelector } from 'state/slices/authentication/authentication.selector';
import { navbarVisibilitySelector } from 'state/slices/layout/layout.selector';

import UserAvatarDropdown from '../../ui/UserAvatarDropdown/UserAvatarDropdown.component';

import { HEADER_LINKS } from './Header.utils';
import { useStyles } from './Header.styles';

const Header: FC = () => {
  const [isSideBarOpen, toggleSideBar] = useToggle();

  const isAuthenticated = useTypedSelector(isAuthenticatedSelector);
  const isNavbarVisible = useTypedSelector(navbarVisibilitySelector);

  const { classes } = useStyles({
    isSideBarOpen,
  });

  const rootPath = useMemo(() => {
    return isAuthenticated ? '/cliente' : '/';
  }, [isAuthenticated]);

  const dispatch = useTypedDispatch();

  const onToggleSideBar = () => {
    toggleSideBar();
  };

  const onToggleNavbar = () => {
    dispatch(setNavbarVisibility(!isNavbarVisible));
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <Container fluid={isAuthenticated}>
          <Flex py="xl" align="center" justify="space-between">
            {isAuthenticated && (
              <Fragment>
                <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                  <Text
                    component={Link}
                    to={rootPath}
                    weight={700}
                    transform="uppercase"
                  >
                    Wellnub
                  </Text>
                </MediaQuery>
                <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                  <Group spacing="xs" sx={{ marginRight: 'auto' }}>
                    <Burger opened={isNavbarVisible} onClick={onToggleNavbar} />
                    <Text>Menu</Text>
                  </Group>
                </MediaQuery>
                <Group spacing="xl">
                  <Indicator
                    withBorder
                    inline
                    size={12}
                    position="bottom-end"
                    color="red"
                  >
                    <FontAwesomeIcon icon={faBell} />
                  </Indicator>
                  <UserAvatarDropdown />
                </Group>
              </Fragment>
            )}
            {!isAuthenticated && (
              <Fragment>
                <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                  <Group>
                    {HEADER_LINKS.map(item => (
                      <Text
                        key={nanoid()}
                        to={item.to}
                        size="sm"
                        fw={600}
                        component={Link}
                      >
                        {item.label}
                      </Text>
                    ))}
                  </Group>
                </MediaQuery>
                <Text
                  component={Link}
                  to={rootPath}
                  weight={700}
                  transform="uppercase"
                >
                  Wellnub
                </Text>
                <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                  <Burger opened={isSideBarOpen} onClick={onToggleSideBar} />
                </MediaQuery>
                <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                  <Group>
                    <Button color="lime" component={Link} to="/iniciar-sesion">
                      Iniciar sesión
                    </Button>
                    <Button
                      variant="light"
                      color="lime"
                      component={Link}
                      to="/registrarse"
                    >
                      Registrarse
                    </Button>
                  </Group>
                </MediaQuery>
              </Fragment>
            )}
          </Flex>
        </Container>
      </header>

      {!isAuthenticated && (
        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <aside className={classes.sidebar}>
            <Flex h="100%" justify="space-between" direction="column">
              <nav>
                <Stack>
                  {HEADER_LINKS.map(link => (
                    <Text
                      key={nanoid()}
                      fw={500}
                      display="block"
                      component={Link}
                      to={link.to}
                      size="sm"
                      onClick={onToggleSideBar}
                    >
                      {link.label}
                    </Text>
                  ))}
                </Stack>
              </nav>
              <Stack>
                <Button
                  fullWidth
                  color="green"
                  component={Link}
                  to="/iniciar-sesion"
                  onClick={onToggleSideBar}
                >
                  Iniciar sesión
                </Button>
                <Button
                  fullWidth
                  color="green"
                  variant="outline"
                  component={Link}
                  to="/registrarse"
                  onClick={onToggleSideBar}
                >
                  Registrarse
                </Button>
                <Divider />
                <Text align="center" size="sm">
                  &copy; 2023. All rights reserved
                </Text>
              </Stack>
            </Flex>
          </aside>
        </MediaQuery>
      )}
    </Fragment>
  );
};

export default Header;
