import { createSelector } from '@reduxjs/toolkit';
import { TDrawer } from 'utils/types.util';
import { RootState } from '../../store';

export const drawerSelector = createSelector(
  [(state: RootState) => state.layout.drawers, (_, name: TDrawer) => name],
  (drawers, name) => drawers[name],
);

export const navbarVisibilitySelector = createSelector(
  [(state: RootState) => state.layout.navbar.isVisible],
  isVisible => isVisible,
);
