import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { DashboardPage, InbodySchedulePage } from 'pages';
import InformativeForm from '../forms/InformativeForm/InformativeForm.component';

const ClientRoutes: FC = () => {
  return (
    <Routes>
      <Route index element={<InformativeForm />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="agenda-un-analisis" element={<InbodySchedulePage />} />
    </Routes>
  );
};

export default ClientRoutes;
