import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
  DashboardPage,
  InbodySchedulePage,
  MedicalPlanPage,
  NewMedicalAppointmentPage,
  NutritionistsPage,
  ProgressPage,
} from 'pages';

const ClientRoutes: FC = () => {
  return (
    <Routes>
      <Route index element={<p>Index</p>} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="progreso" element={<ProgressPage />}>
        <Route index element={<Navigate replace to="mi-plan-nutricional" />} />
        <Route path="mi-plan-nutricional" element={<MedicalPlanPage />}>
          <Route path="nueva-cita" element={<NewMedicalAppointmentPage />} />
          <Route
            path="programa-nutricional"
            element={<p>Programa nutricional</p>}
          />
        </Route>
        <Route path="perfil-medico" element={<p>Perfil Medico</p>} />
        <Route path="mi-progreso" element={<p>Mi progreso</p>} />
        <Route path="agenda-un-analisis" element={<p>Agenda un analisis</p>} />
      </Route>
      <Route path="agenda-un-analisis" element={<InbodySchedulePage />} />
      <Route path="nutriologos" element={<NutritionistsPage />} />
      <Route path="nutriologos/:name" element={<p>soy el nutri</p>} />
    </Routes>
  );
};

export default ClientRoutes;
