import { FC } from 'react';
import { Container, Stack, Title } from '@mantine/core';

const HomePage: FC = () => {
  return (
    <Container>
      <Stack>
        <Title order={1} align="center">
          Home
        </Title>
      </Stack>
    </Container>
  );
};

export default HomePage;
