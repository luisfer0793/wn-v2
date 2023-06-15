import { nutritionistsAdapter } from './nutritionists.slice';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const nutritionistsSelectors = nutritionistsAdapter.getSelectors(
  (state: RootState) => state.nutritionists,
);

export const nutritionistsDescriptionsSelector = createSelector(
  [nutritionistsSelectors.selectAll],
  nutritionists =>
    nutritionists.map(item => ({
      image: item.pictureUrl,
      description: 'Soy un nutriólogo',
      value: `${item.name} ${item.lastName}`,
      label: `${item.name} ${item.lastName}`,
    })),
);
