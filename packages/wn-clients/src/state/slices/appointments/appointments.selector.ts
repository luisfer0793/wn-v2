import { createSelector } from '@reduxjs/toolkit';
import {
  nutritionistAppointmentAdapter,
  inbodyAppointmentAdapter,
} from './appointments.slice';
import { RootState } from '../../store';

// ---- NUTRITIONIST ----
export const nutritionistAppointmentsSelectors =
  nutritionistAppointmentAdapter.getSelectors<RootState>(
    state => state.appointments.nutritionist,
  );

export const nutritionistAppointmentSelector = createSelector(
  [
    (state: RootState) => state,
    (state: RootState) => state.appointments.nutritionist.targetId,
  ],
  (state, id) => nutritionistAppointmentsSelectors.selectById(state, id),
);

export const pendingNutritionistAppointmentsSelector = createSelector(
  [nutritionistAppointmentsSelectors.selectAll],
  appointments =>
    appointments.filter(appointment => appointment.status === 'pending'),
);

export const acceptedNutritionistAppointmentsSelector = createSelector(
  [nutritionistAppointmentsSelectors.selectAll],
  appointments =>
    appointments.filter(appointment => appointment.status === 'accepted'),
);

export const nutritionistAppointmentsSelector = createSelector(
  [
    pendingNutritionistAppointmentsSelector,
    acceptedNutritionistAppointmentsSelector,
  ],
  (pending, accepted) => [...pending, ...accepted],
);

// ---- INBODY ----
export const inbodyAppointmentsSelectors =
  inbodyAppointmentAdapter.getSelectors<RootState>(
    state => state.appointments.inbody,
  );
