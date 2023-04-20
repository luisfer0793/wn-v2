import 'dayjs/locale/es';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PersistGate } from 'redux-persist/integration/react';
import { DatesProvider } from '@mantine/dates';
import { modals, ModalsProvider } from '@mantine/modals';
import { Global, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import App from './App';

import { persistor, store } from './state/store';

import { DrawerSwitcher } from 'components';

import { Theme } from './styles/theme.styles';
import { globalStyles } from './styles/global.styles';
import { WNModals } from './modals/modals.helper';

// import './App.css';

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
          <ModalsProvider modals={WNModals}>
            <DatesProvider settings={{ locale: 'es' }}>
              <Notifications />
              <Global styles={globalStyles} />
              <App />
              <DrawerSwitcher />
            </DatesProvider>
          </ModalsProvider>
        </MantineProvider>
      </PersistGate>
    </Provider>
  </QueryClientProvider>,
);
