import { Container, Space, Stack, Title } from '@mantine/core';
import { InformativeForm } from 'components';

import { useTypedSelector } from './state/store';

import { isAuthenticatedSelector } from './state/slices/authentication/authentication.selector';
import { useEffect } from 'react';

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
          </Stack>
        </Container>
      </header>
    </div>
  );
}

export default App;
