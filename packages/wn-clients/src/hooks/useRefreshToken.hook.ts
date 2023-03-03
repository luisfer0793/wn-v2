import { wellnub } from '../network/wellnub.api';
import useAuthenticationSlice from './useAuthenticationSlice.hook';

const useRefreshToken = () => {
  const { tokens, handleLogout, handleAuthenticationTokens } =
    useAuthenticationSlice();

  return async () => {
    try {
      const response = await wellnub.post('/v1/auth/refresh-token', {
        email: '',
        refreshToken: tokens.refresh,
      });
      handleAuthenticationTokens({
        access: response.data.accessToken,
        refresh: response.data.refreshToken,
      });
      return response.data.accessToken;
    } catch (error) {
      handleLogout();
    }
  };
};

export default useRefreshToken;
