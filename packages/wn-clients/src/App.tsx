import React, { useEffect, useState } from 'react';
import { Container, Space, Title } from '@mantine/core';
import { InformativeForm } from 'components';
import { InformativeFormDefaultValues } from './components/forms/InformativeForm/InformativeForm.schema';

const AUTOCOMPLETE_VALUES = [
  { value: 'Primero' },
  { value: 'Segundo' },
  { value: 'Tercero' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Title align="center">Yo soy el titulo principal</Title>
          <Space h="lg" />
          <InformativeForm />
        </Container>
      </header>
    </div>
  );
}

export default App;
