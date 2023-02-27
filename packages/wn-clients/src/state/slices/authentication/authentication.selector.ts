import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';

export const isAuthenticatedSelector = createSelector(
  [(state: RootState) => state.authentication.isAuthenticated],
  isAuthenticated => isAuthenticated,
);
