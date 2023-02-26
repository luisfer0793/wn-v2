import { array, date, InferType, number, object, ref, string } from 'yup';

const ERROR_MESSAGE = 'Este campo es obligatorio';

export const InformativeFormSchema = object({
  name: string().required(ERROR_MESSAGE),
  email: string().email('Escribe un email válido'),
  password: string().min(6, 'La contraseña debe de tener 6 o mas caracteres'),
  confirmation: string().oneOf(
    [ref('password')],
    'Las contraseñas deben de coincidir',
  ),
  nutritionist: string().required(ERROR_MESSAGE),
  time: date(),
  price: number(),
  appointmentTime: array().of(date()),
  birthdate: date(),
  appointmentDate: array().of(date()),
  phoneNumber: string(),
  timeZone: string(),
});

export type InformativeFormData = InferType<typeof InformativeFormSchema>;

export const InformativeFormDefaultValues: InformativeFormData = {
  name: '',
  email: '',
  password: '',
  confirmation: '',
  nutritionist: '',
  price: 0,
  time: new Date(),
  appointmentTime: [new Date(), new Date()],
  birthdate: new Date(),
  appointmentDate: [new Date(), new Date()],
  phoneNumber: '',
  timeZone: '',
};
