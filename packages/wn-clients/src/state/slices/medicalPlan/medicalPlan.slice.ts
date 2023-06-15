import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TWNMedicalPlan } from '@wn/shared';

const initialState: {
  data: Partial<TWNMedicalPlan>;
} = {
  data: {},
};

const medicalPlanSlice = createSlice({
  name: 'medicalPlan',
  initialState,
  reducers: {
    setMedicalPlan: (state, action: PayloadAction<TWNMedicalPlan>) => {
      state.data = action.payload;
    },
  },
});

export const { setMedicalPlan } = medicalPlanSlice.actions;
export const MedicalPlanReducer = medicalPlanSlice.reducer;
