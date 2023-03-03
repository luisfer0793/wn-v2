import { InferType, object, string } from 'yup';

const REQUIRED_MESSAGE = 'Este campo es obligatorio';

export const LoginFormSchema = object({
  email: string().email('Escribe un email válido').required(REQUIRED_MESSAGE),
  password: string().required(REQUIRED_MESSAGE),
});

export type LoginFormData = InferType<typeof LoginFormSchema>;

export const LoginFormDefaultValues: LoginFormData = {
  email: '',
  password: '',
};
