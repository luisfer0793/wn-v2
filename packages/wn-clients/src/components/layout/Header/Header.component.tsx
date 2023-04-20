import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Group, Text } from '@mantine/core';
import { nanoid } from '@reduxjs/toolkit';

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
              size="lg"
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
        </div>
      </Container>
    </header>
  );
};

export default Header;
