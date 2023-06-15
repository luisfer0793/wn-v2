import { FC, Fragment, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Burger,
  Button,
  Container,
  Group,
  Indicator,
  MediaQuery,
  Text,
} from '@mantine/core';
import { nanoid } from '@reduxjs/toolkit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import { useTypedSelector } from 'state/store';
import { isAuthenticatedSelector } from 'state/slices/authentication/authentication.selector';

import { HEADER_LINKS } from './Header.utils';
import { useStyles } from './Header.styles';

const Header: FC = () => {
  const isAuthenticated = useTypedSelector(isAuthenticatedSelector);

  const { classes } = useStyles();

  const rootPath = useMemo(() => {
    return isAuthenticated ? '/cliente' : '/';
  }, [isAuthenticated]);

  return (
    <header className={classes.header}>
      <Container fluid={isAuthenticated}>
        <div className={classes.headerWrapper}>
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
                  <Burger opened={false} />
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
              </Group>
            </Fragment>
          )}
          {!isAuthenticated && (
            <Fragment>
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
              <div>
                <Text
                  component={Link}
                  to={rootPath}
                  weight={700}
                  transform="uppercase"
                >
                  Wellnub
                </Text>
              </div>
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
            </Fragment>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
