import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Grid, Stack, Text } from '@mantine/core';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  WN_TIME_ZONES,
  WNAutocompleteInput,
  WNDateInput,
  WNDateRangeInput,
  WNNumberInput,
  WNPasswordInput,
  WNPhoneNumberInput,
  WNTextInput,
  WNTimeInput,
} from '@wn/shared';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faAt,
  faLock,
  faUserDoctor,
  faClock,
  faCalendarDays,
  faMoneyBill,
  faCakeCandles,
  faPhone,
  faEarthAmericas,
} from '@fortawesome/free-solid-svg-icons';

import AutocompleteUserProfileItem from '../../ui/AutocompleteUserProfileItem/AutocompleteUserProfileItem.component';

import {
  InformativeFormDefaultValues,
  InformativeFormSchema,
} from './InformativeForm.schema';

const NUTRITIONIST_OPTIONS = [
  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Robert Chase',
    value: 'Robert Chase',
    description: 'Fascinated with cooking, though has no sense of taste',
  },

  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Allison Cameron',
    value: 'Allison Cameron',
    description: 'One of the richest people on Earth',
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Erick Foreman',
    value: 'Erick Foreman',
    description: 'Overweight, lazy, and often ignorant',
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
    label: 'Gregory House',
    value: 'Gregory House',
    description: 'Not just a sponge',
  },
];

const InformativeForm: FC = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(InformativeFormSchema),
    defaultValues: InformativeFormDefaultValues,
  });

  const onSubmitHandler = handleSubmit(data => {
    console.log('La data es: ', data);
  });

  return (
    <form onSubmit={onSubmitHandler}>
      <Stack>
        <Grid gutter="lg">
          <Grid.Col xs={6}>
            <WNTextInput
              withAsterisk
              name="name"
              control={control}
              label="Nombre"
              description="Usaremos este nombre para identificarte en nuestra aplicación"
              icon={<FontAwesomeIcon icon={faUser} />}
            />
          </Grid.Col>
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
          <Grid.Col xs={6}>
            <WNPasswordInput
              withAsterisk
              name="confirmation"
              control={control}
              label="Confirmar contraseña"
              description="Ingresa de nuevo tu contraseña"
              icon={<FontAwesomeIcon icon={faLock} />}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <WNAutocompleteInput
              name="nutritionist"
              control={control}
              data={NUTRITIONIST_OPTIONS}
              label="Nutriologo"
              description="Elije al nutriólogo que mejor se ajuste a tus necesidades"
              itemComponent={AutocompleteUserProfileItem}
              filter={(value, item) =>
                item.label
                  .toLocaleLowerCase()
                  .includes(value.toLocaleLowerCase().trim())
              }
              icon={<FontAwesomeIcon icon={faUserDoctor} />}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <WNNumberInput
              name="price"
              control={control}
              min={0}
              precision={2}
              label="Precio"
              description="Es el precio que usaremos para venderlo"
              parser={(value = '') => value.replace(/\$\s?|(,*)/g, '')}
              formatter={(value = '') =>
                !Number.isNaN(parseFloat(value))
                  ? `$ ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                  : '$ '
              }
              icon={<FontAwesomeIcon icon={faMoneyBill} />}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <WNTimeInput
              name="time"
              control={control}
              label="Horario"
              description="Selecciona la hora de apertura"
              icon={<FontAwesomeIcon icon={faClock} />}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <Text>Aquí iba el rango</Text>
          </Grid.Col>
          <Grid.Col xs={6}>
            <WNDateInput
              name="birthdate"
              control={control}
              clearable={false}
              label="Fecha de nacimiento"
              description="Recuerda que debes de ser mayor de edad"
              icon={<FontAwesomeIcon icon={faCakeCandles} />}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <WNDateRangeInput
              name="appointmentDate"
              control={control}
              clearable={false}
              label="Fecha de la cita"
              description="Estos serán los días de atención para tus pacientes"
              icon={<FontAwesomeIcon icon={faCalendarDays} />}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <WNPhoneNumberInput
              name="phoneNumber"
              control={control}
              label="Número de teléfono"
              description="Telefono de contacto a 10 dígitos"
              icon={<FontAwesomeIcon icon={faPhone} />}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <WNAutocompleteInput
              name="timeZone"
              control={control}
              data={WN_TIME_ZONES}
              label="Zona horaria"
              description="Es la zona horaria a partir de donde se ajustaran los horarios"
              icon={<FontAwesomeIcon icon={faEarthAmericas} />}
            />
          </Grid.Col>
        </Grid>
        <Button type="submit" color="teal">
          Enviar
        </Button>
      </Stack>
    </form>
  );
};

export default InformativeForm;
