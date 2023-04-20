import { FC } from 'react';
import { Container, Stack, Title } from '@mantine/core';
import { LoginForm } from 'components';

const HomePage: FC = () => {
  return (
    <Container>
      <Stack>
        <Title order={1} align="center">
          Home
        </Title>
        <LoginForm />
      </Stack>
    </Container>
  );
};

export default HomePage;
