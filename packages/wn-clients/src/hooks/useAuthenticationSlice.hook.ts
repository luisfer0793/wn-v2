import { useTypedDispatch, useTypedSelector } from '../state/store';

import { authenticationSliceSelector } from '../state/slices/authentication/authentication.selector';
import {
  AuthenticationTokensProps,
  LoginPayloadProps,
  setAuthenticationTokens,
  setLogin,
  setLogout,
} from '../state/slices/authentication/authentication.slice';

const useAuthenticationSlice = () => {
  const { tokens, isAuthenticated } = useTypedSelector(
    authenticationSliceSelector,
  );

  const dispatch = useTypedDispatch();

  const handleLogin = (payload: LoginPayloadProps) => {
    dispatch(setLogin(payload));
  };

  const handleLogout = () => {
    dispatch(setLogout());
  };

  const handleAuthenticationTokens = (payload: AuthenticationTokensProps) => {
    dispatch(setAuthenticationTokens(payload));
  };

  return {
    tokens,
    isAuthenticated,
    handleLogin,
    handleLogout,
    handleAuthenticationTokens,
  };
};

export default useAuthenticationSlice;
