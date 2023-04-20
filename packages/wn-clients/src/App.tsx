import { useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Text } from '@mantine/core';

import { ProtectedRoute } from 'helpers';
import { AppShell, ClientRoutes } from 'components';
import { LandingPage, LoginPage } from 'pages';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppShell />}>
        <Route index element={<LandingPage />} />
        <Route path="iniciar-sesion" element={<LoginPage />} />

        {/* RUTAS PROTEGIDAS */}
        <Route element={<ProtectedRoute />}>
          <Route path="cliente/*" element={<ClientRoutes />} />
        </Route>

        <Route path="*" element={<Text>Not Found</Text>} />
      </Route>,
    ),
  );

  useEffect(() => {
    console.log('[APP]: Render');
  });

  return <RouterProvider router={router} />;
}

export default App;
