import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DRAWERS } from 'utils/constants.util';
import { TDrawer } from 'utils/types.util';

const initialState = {
  navbar: {
    isVisible: false,
  },
  drawers: {
    [DRAWERS.INBODY_APPOINTMENT_DETAILS]: {
      isVisible: false,
    },
    [DRAWERS.NUTRITIONIST_APPOINTMNET_DETAILS]: {
      isVisible: false,
    },
  },
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setDrawerVisibility: (
      state,
      action: PayloadAction<{ name: TDrawer; isVisible: boolean }>,
    ) => {
      state.drawers[action.payload.name].isVisible = action.payload.isVisible;
    },
    setNavbarVisibility: (state, action: PayloadAction<boolean>) => {
      state.navbar.isVisible = action.payload;
    },
  },
});

export const { setDrawerVisibility, setNavbarVisibility } = layoutSlice.actions;
export const LayoutReducer = layoutSlice.reducer;
