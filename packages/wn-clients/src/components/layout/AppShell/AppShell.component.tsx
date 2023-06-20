import { FC } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { Box } from '@mantine/core';

import Header from '../Header/Header.component';
import Footer from '../Footer/Footer.component';
import Navbar from '../Navbar/Navbar.component';

import { useTypedSelector } from 'state/store';
import { isAuthenticatedSelector } from 'state/slices/authentication/authentication.selector';

import { useStyles } from './AppShell.styles';

const AppShell: FC = () => {
  const isAuthenticated = useTypedSelector(isAuthenticatedSelector);

  const { pathname } = useLocation();

  const { classes } = useStyles({
    isAuthenticated,
  });

  if (isAuthenticated && pathname === '/') {
    return <Navigate replace to="/cliente" />;
  }

  return (
    <>
      {isAuthenticated && <Navbar />}
      <div className={classes.shell}>
        <Header />
        <Box component="main" className={classes.main}>
          <Outlet />
        </Box>
        <Footer />
      </div>
    </>
  );
};

export default AppShell;
