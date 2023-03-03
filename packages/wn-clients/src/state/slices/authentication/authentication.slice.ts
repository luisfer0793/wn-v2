import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WNClientType } from '@wn/shared';

export interface AuthenticationTokensProps {
  access: string;
  refresh: string;
}

export interface LoginPayloadProps {
  isAuthenticated: boolean;
  tokens: AuthenticationTokensProps;
  client: Partial<WNClientType>;
}

const initialState: {
  isAuthenticated: boolean;
  tokens: {
    access: string;
    refresh: string;
  };
  client: Partial<WNClientType>;
} = {
  isAuthenticated: false,
  tokens: {
    access: '',
    refresh: '',
  },
  client: {},
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<LoginPayloadProps>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.tokens = action.payload.tokens;
      state.client = action.payload.client;
    },
    setLogout: state => {
      state.isAuthenticated = false;
      state.tokens = {
        access: '',
        refresh: '',
      };
      state.client = {};
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setAuthenticationTokens: (
      state,
      action: PayloadAction<AuthenticationTokensProps>,
    ) => {
      state.tokens = action.payload;
    },
    setAuthenticationClient: (state, action: PayloadAction<WNClientType>) => {
      state.client = action.payload;
    },
  },
});

export const {
  setLogin,
  setLogout,
  setIsAuthenticated,
  setAuthenticationTokens,
  setAuthenticationClient,
} = authenticationSlice.actions;
export const AuthenticationReducer = authenticationSlice.reducer;
