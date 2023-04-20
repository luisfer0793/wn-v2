import { FC } from 'react';
import { Group, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleInfo,
  faClock,
  faLocationDot,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { es } from 'date-fns/locale';
import { format, isToday as isTodayFn, differenceInDays } from 'date-fns';

import { TWNInbodyAppointment } from '@wn/shared';

import { useTypedDispatch } from 'state/store';

import { useStyles } from './InbodyAppointmentCard.styles';

interface AppointmentProps {
  appointment: TWNInbodyAppointment;
}

const InbodyAppointmentCard: FC<AppointmentProps> = ({ appointment }) => {
  const {
    location: {
      name = 'Partner',
      address: { neighborhood = 'Colonia' } = {},
    } = {},
    scheduleDate = new Date(2022, 4, 31),
  } = appointment;

  const dispatch = useTypedDispatch();

  const isToday = isTodayFn(new Date(scheduleDate));

  const differenceDays = differenceInDays(new Date(scheduleDate), new Date());

  const variant = differenceDays > 5 || differenceDays < 0 ? 'INFO' : 'WARNING';

  const { classes, cx } = useStyles({ variant });

  const onShowDetailsClickHandler = () => {
    console.log('El inbody appointment es: ', appointment);
  };

  return (
    <article className={classes.card}>
      <header className={classes.header}>
        <Title order={6}>Análisis corporal agendado</Title>
      </header>
      <main className={classes.main}>
        <Stack spacing="sm">
          <Group>
            <ThemeIcon variant="light" color="orange">
              <FontAwesomeIcon icon={faLocationDot} size="sm" />
            </ThemeIcon>
            <Text size="sm">
              {name} - {neighborhood}
            </Text>
          </Group>
          <Group>
            <ThemeIcon variant="light" color="orange">
              <FontAwesomeIcon icon={faClock} size="sm" />
            </ThemeIcon>
            <Text size="sm">
              {format(new Date(scheduleDate), "PP '@' hh:mm a", {
                locale: es,
              })}
            </Text>
          </Group>
        </Stack>
      </main>
      <footer className={cx(classes.footer, classes.alert)}>
        <div className={classes.flex}>
          <Group>
            <FontAwesomeIcon
              icon={variant === 'INFO' ? faCircleInfo : faTriangleExclamation}
              className={classes.alertIcon}
            />
            <Text className={classes.alertMessage} size="sm">
              {isToday
                ? 'Tu cita es hoy'
                : variant === 'INFO'
                ? 'Recuerda llegar puntual'
                : `Tu cita es en ${differenceDays} ${
                    differenceDays === 1 ? 'día' : 'días'
                  }`}
            </Text>
          </Group>
          <Text
            size="xs"
            weight="bold"
            onClick={onShowDetailsClickHandler}
            className={classes.asLink}
          >
            Ver detalles
          </Text>
        </div>
      </footer>
    </article>
  );
};

export default InbodyAppointmentCard;
