import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Alert, Button, Grid, Stack } from '@mantine/core';
import { WNPasswordInput, WNTextInput } from '@wn/shared';

import { useTypedDispatch } from 'state/store';
import { useAuthenticationService } from 'network/services';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAt,
  faLock,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';

import { LoginFormDefaultValues, LoginFormSchema } from './LoginForm.schema';

import { setLogout } from 'state/slices/authentication/authentication.slice';

const LoginForm: FC = () => {
  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(LoginFormSchema),
    defaultValues: LoginFormDefaultValues,
  });

  const { mutate: login, isLoading, isError } = useAuthenticationService();

  const dispatch = useTypedDispatch();

  const onSubmitHandler = handleSubmit(data => {
    login(data);
  });

  const onLogoutHandler = () => {
    dispatch(setLogout());
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Stack>
        <Grid gutter="lg">
          <Grid.Col xs={6}>
            <WNTextInput
              withAsterisk
              name="email"
              control={control}
              type="email"
              label="Email"
              description="Este será el correo donde te enviaremos notificaciones"
              icon={<FontAwesomeIcon icon={faAt} />}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <WNPasswordInput
              withAsterisk
              name="password"
              control={control}
              label="Contraseña"
              description="Recuerda utilizar una contraseña segura"
              icon={<FontAwesomeIcon icon={faLock} />}
            />
          </Grid.Col>
        </Grid>

        {isError && (
          <Alert
            icon={<FontAwesomeIcon icon={faCircleExclamation} />}
            title="No se pudo iniciar sesión"
            variant="light"
            color="orange"
          >
            Usuario y/o contraseña incorrectos
          </Alert>
        )}

        <Button type="submit" color="orange" loading={isLoading}>
          Iniciar sesión
        </Button>

        <Button variant="outline" color="orange" onClick={onLogoutHandler}>
          Cerrar sesión
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
