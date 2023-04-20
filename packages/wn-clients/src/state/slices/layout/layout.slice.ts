import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DRAWERS } from 'utils/constants.util';
import { TDrawer } from 'utils/types.util';

const initialState = {
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
  },
});

export const { setDrawerVisibility } = layoutSlice.actions;
export const LayoutReducer = layoutSlice.reducer;
