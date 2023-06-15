import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TWNNutritionist } from '@wn/shared';

const initialState: {
  data: Partial<TWNNutritionist>;
} = {
  data: {},
};

const myNutritionistSlice = createSlice({
  name: 'myNutritionist',
  initialState,
  reducers: {
    setMyNutritionist: (state, action: PayloadAction<TWNNutritionist>) => {
      state.data = action.payload;
    },
  },
});

export const { setMyNutritionist } = myNutritionistSlice.actions;
export const MyNutritionistReducer = myNutritionistSlice.reducer;
