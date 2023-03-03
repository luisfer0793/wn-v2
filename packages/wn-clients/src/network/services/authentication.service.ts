import { useWellnubAPI } from 'hooks';
import { useMutation } from '@tanstack/react-query';
import { useTypedDispatch } from '../../state/store';
import { setLogin } from '../../state/slices/authentication/authentication.slice';

interface AuthenticationPayloadProps {
  email: string;
  password: string;
}

const useAuthenticationQuery = () => {
  const wellnub = useWellnubAPI();

  return async (payload: AuthenticationPayloadProps) => {
    const { data } = await wellnub.post<{
      token: {
        tokenType: string;
        accessToken: string;
        refreshToken: string;
        expiresIn: string;
      };
      user: {
        id: string;
        email: string;
        role: string;
        hasLoggedIn: boolean;
        isProfileCompleted: boolean;
      };
    }>('/v1/auth/login?role=client', payload);
    return data;
  };
};
const useAuthenticationService = () => {
  const query = useAuthenticationQuery();
  const dispatch = useTypedDispatch();

  return useMutation(query, {
    onSuccess: data => {
      const {
        token,
        user: { id, email, role, isProfileCompleted, hasLoggedIn },
      } = data;
      dispatch(
        setLogin({
          isAuthenticated: true,
          tokens: {
            access: token.accessToken,
            refresh: token.refreshToken,
          },
          client: {
            id,
            email,
            role,
            isProfileCompleted,
            hasLoggedIn,
          },
        }),
      );
    },
  });
};

export default useAuthenticationService;
