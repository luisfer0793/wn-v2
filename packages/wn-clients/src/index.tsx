import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistGate } from 'redux-persist/integration/react';

import { Global, MantineProvider } from '@mantine/core';

import App from './App';

import { persistor, store } from './state/store';

import { Theme } from './styles/theme.styles';
import { globalStyles } from './styles/global.styles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={Theme}>
          <Global styles={globalStyles} />
          <App />
        </MantineProvider>
      </PersistGate>
    </Provider>
  </QueryClientProvider>,
);
