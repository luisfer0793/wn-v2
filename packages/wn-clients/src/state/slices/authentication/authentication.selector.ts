import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';

export const isAuthenticatedSelector = createSelector(
  [(state: RootState) => state.authentication.isAuthenticated],
  isAuthenticated => isAuthenticated,
);

export const authenticationTokensSelector = createSelector(
  [(state: RootState) => state.authentication.tokens],
  tokens => tokens,
);

export const authenticationSliceSelector = createSelector(
  [(state: RootState) => state.authentication],
  autenticationSlice => autenticationSlice,
);
