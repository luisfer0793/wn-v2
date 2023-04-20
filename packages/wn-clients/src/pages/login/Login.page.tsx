import { Container, Stack, Title } from '@mantine/core';

import { LoginForm } from 'components';

const LoginPage = () => {
  return (
    <Container size="xl">
      <Stack>
        <Title align="center">Iniciar sesión</Title>
        <LoginForm />
      </Stack>
    </Container>
  );
};

export default LoginPage;
