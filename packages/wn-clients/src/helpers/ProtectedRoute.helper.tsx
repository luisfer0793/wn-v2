import { FC } from 'react';
import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useTypedSelector } from 'state/store';
import { isAuthenticatedSelector } from 'state/slices/authentication/authentication.selector';

const ProtectedRoute: FC = () => {
  const isAuthenticated = useTypedSelector(isAuthenticatedSelector);

  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate replace to="/acceso-restringido" state={{ from: location }} />
  );
};

export default ProtectedRoute;
