import { useEffect } from 'react';
import { Container, Space, Stack, Title } from '@mantine/core';
import { InformativeForm, LoginForm } from 'components';

import { useTypedSelector } from './state/store';

import { isAuthenticatedSelector } from './state/slices/authentication/authentication.selector';

function App() {
  const isAuthenticated = useTypedSelector(isAuthenticatedSelector);

  useEffect(() => {
    console.log('[APP]: Render');
  });

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Stack h="lg">
            <Title align="center">
              Usuario logueado: {isAuthenticated ? 'SI' : 'NO'}
            </Title>
            <Space h="lg" />
            <InformativeForm />
            <Title order={2} align="center">
              Inicia sesión
            </Title>
            <LoginForm />
          </Stack>
        </Container>
      </header>
    </div>
  );
}

export default App;
