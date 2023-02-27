import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setIsAuthenticated } = authenticationSlice.actions;
export const AuthenticationReducer = authenticationSlice.reducer;
