import { FC } from 'react';
import {
  Anchor,
  Box,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';

import { format } from 'date-fns';
import { es } from 'date-fns/locale';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faClock,
  faTriangleExclamation,
  faBriefcaseMedical,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

import { TWNNutritionistAppointment } from '@wn/shared';

import useDrawer from 'hooks/useDrawer.hook';

import { useTypedDispatch } from 'state/store';
import { setNutritionistAppointmentTargetId } from 'state/slices/appointments/appointments.slice';

import { appointmentCardSectionStyles } from 'styles/shared.styles';

import { DRAWERS, SERVICE_MODES } from 'utils/constants.util';

import { useStyles } from './NutritionistAppointmentCard.styles';

interface NutritionistAppointmentCardProps {
  appointment: TWNNutritionistAppointment;
}

const NutritionistAppointmentCard: FC<NutritionistAppointmentCardProps> = ({
  appointment,
}) => {
  const { startDate, status, nextActionRole, mode, service } = appointment;

  const { openDrawerHandler } = useDrawer(
    DRAWERS.NUTRITIONIST_APPOINTMNET_DETAILS,
  );

  const dispatch = useTypedDispatch();

  const { classes } = useStyles({
    status,
  });

  const onShowDetailsHandler = () => {
    openDrawerHandler();
    dispatch(setNutritionistAppointmentTargetId(appointment._id));
  };

  return (
    <article className={classes.card}>
      <Box component="header" sx={appointmentCardSectionStyles}>
        <Title order={6}>Consulta nutricional</Title>
      </Box>
      <Box
        component="main"
        sx={appointmentCardSectionStyles}
        className={classes.main}
      >
        <Stack spacing="md">
          <Group noWrap>
            <ThemeIcon variant="light" color="lime">
              <FontAwesomeIcon icon={faBriefcaseMedical} size="sm" />
            </ThemeIcon>
            <Text size="sm" truncate>
              Servicio: {service?.service.name}
            </Text>
          </Group>
          <Group>
            <ThemeIcon variant="light" color="lime">
              <FontAwesomeIcon icon={faLocationDot} size="sm" />
            </ThemeIcon>
            <Text size="sm">Modalidad: {SERVICE_MODES[mode]}</Text>
          </Group>
          <Group>
            <ThemeIcon variant="light" color="lime">
              <FontAwesomeIcon icon={faClock} />
            </ThemeIcon>
            <Text size="sm">
              Fecha:{' '}
              {format(new Date(startDate), "iiii PP '@' hh:mm a", {
                locale: es,
              })}
            </Text>
          </Group>
        </Stack>
      </Box>
      <Box
        component="footer"
        sx={appointmentCardSectionStyles}
        className={classes.footer}
      >
        <Group noWrap>
          <FontAwesomeIcon
            icon={status === 'accepted' ? faCircleInfo : faTriangleExclamation}
            className={classes.colored}
          />
          <Text size="sm">
            {status === 'pending'
              ? nextActionRole === 'nutritionist'
                ? 'Falta confirmación por parte de tu nutriólogo'
                : 'Necesitas confirmar esta cita'
              : 'Recuerda que puedes cambiar tu cita en todo momento'}
          </Text>
        </Group>
        <Anchor
          component="button"
          size="xs"
          weight="bold"
          className={classes.colored}
          onClick={onShowDetailsHandler}
        >
          Ver detalles
        </Anchor>
      </Box>
    </article>
  );
};

export default NutritionistAppointmentCard;
