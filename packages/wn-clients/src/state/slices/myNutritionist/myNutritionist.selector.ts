import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const myNutritionistServicesSelector = createSelector(
  [
    (state: RootState) =>
      state.myNutritionist.data.nutritionistProfile?.services,
  ],
  services =>
    services?.map(service => ({
      // ...service,
      value: service._id,
      label: service.description,
      // mode: service.mode.map(mode => ({
      //   value: mode,
      //   label: { site: 'Presencial', online: 'En línea', home: 'A domicilio' }[
      //     mode
      //   ],
      // })),
    })) ?? [],
);
