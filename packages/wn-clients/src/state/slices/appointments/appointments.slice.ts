import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { TWNNutritionistAppointment, TWNInbodyAppointment } from '@wn/shared';

export const nutritionistAppointmentAdapter =
  createEntityAdapter<TWNNutritionistAppointment>({
    selectId: appointment => appointment._id,
    sortComparer: (a, b) =>
      new Date(a.startDate).getDate() - new Date(b.startDate).getDate(),
  });

export const inbodyAppointmentAdapter =
  createEntityAdapter<TWNInbodyAppointment>({
    selectId: appointment => appointment._id,
    sortComparer: (a, b) =>
      new Date(a.measurementLimitDate).getDate() -
      new Date(b.measurementLimitDate).getDate(),
  });

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    nutritionist: {
      ...nutritionistAppointmentAdapter.getInitialState(),
      targetId: '',
    },
    inbody: inbodyAppointmentAdapter.getInitialState(),
  },
  reducers: {
    setNutritionistAppointmentTargetId: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.nutritionist.targetId = action.payload;
    },
    setNutritionistAppointments: (
      state,
      action: PayloadAction<TWNNutritionistAppointment[]>,
    ) => {
      nutritionistAppointmentAdapter.setAll(state.nutritionist, action.payload);
    },
    setInbodyAppointments: (
      state,
      action: PayloadAction<TWNInbodyAppointment[]>,
    ) => {
      inbodyAppointmentAdapter.setAll(state.inbody, action.payload);
    },
  },
});

export const {
  setNutritionistAppointmentTargetId,
  setNutritionistAppointments,
  setInbodyAppointments,
} = appointmentsSlice.actions;
export const AppointmentsReducer = appointmentsSlice.reducer;
