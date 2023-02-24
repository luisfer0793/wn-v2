import React from 'react';
import ReactDOM from 'react-dom/client';

import {Global, MantineProvider} from "@mantine/core";

import App from './App';

import {Theme} from "./styles/theme.styles";
import {globalStyles} from "./styles/global.styles";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS theme={Theme}>
    <Global styles={globalStyles}/>
    <App />
  </MantineProvider>
);
