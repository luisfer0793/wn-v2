import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { TWNNutritionist } from '@wn/shared';

export const nutritionistsAdapter = createEntityAdapter<TWNNutritionist>({
  selectId: nutritionist => nutritionist._id,
});

const nutritionistsSlice = createSlice({
  name: 'nutritionists',
  initialState: nutritionistsAdapter.getInitialState(),
  reducers: {
    setNutritionists: nutritionistsAdapter.setAll,
  },
});

export const { setNutritionists } = nutritionistsSlice.actions;
export const NutritionistsReducer = nutritionistsSlice.reducer;
