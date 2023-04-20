import { useToast, useWellnubAPI } from 'hooks';
import { useMutation } from '@tanstack/react-query';
import { useTypedDispatch } from 'state/store';
import { setLogin } from 'state/slices/authentication/authentication.slice';
import { ToastVariant } from 'utils/enums.util';
import { NETWORK_ERROR_MESSAGE } from 'utils/constants.util';

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
    }>('/auth/login?role=client', payload);
    return data;
  };
};
const useAuthenticationService = () => {
  const query = useAuthenticationQuery();
  const dispatch = useTypedDispatch();
  const toast = useToast();

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
    // onError: ({ response }) => {
    //   const { isPublic = false, message = '' } = response?.data;
    //   toast({
    //     title: isPublic ? 'Inicio de sesión incorrecto' : 'Error',
    //     variant: isPublic ? ToastVariant.Warning : ToastVariant.Error,
    //     message: isPublic ? message : NETWORK_ERROR_MESSAGE,
    //   });
    // },
  });
};

export default useAuthenticationService;
