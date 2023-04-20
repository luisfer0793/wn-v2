import {
  Box,
  Button,
  Drawer,
  ScrollArea,
  Stack,
  Text,
  Title,
  Alert,
} from '@mantine/core';
import { format } from 'date-fns';
import { isEmpty } from 'lodash';
import { es } from 'date-fns/locale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import useDrawer from 'hooks/useDrawer.hook';
import { DRAWERS } from 'utils/constants.util';

import { useTypedSelector } from 'state/store';
import { nutritionistAppointmentSelector } from 'state/slices/appointments/appointments.selector';

import { useStyles } from './NutritionistAppointmentDrawer.styles';

const NutritionistAppointmentDrawer = () => {
  const appointment = useTypedSelector(nutritionistAppointmentSelector);

  const { isVisible, closeDrawerHandler } = useDrawer(
    DRAWERS.NUTRITIONIST_APPOINTMNET_DETAILS,
  );

  const { classes } = useStyles();

  return (
    <Drawer
      size={500}
      position="right"
      opened={isVisible}
      title="Consulta Nutricional"
      onClose={closeDrawerHandler}
      scrollAreaComponent={ScrollArea.Autosize}
    >
      {!isEmpty(appointment) && (
        <Stack spacing="xl">
          <Box component="section" className={classes.section}>
            <Box p="sm" component="header" className={classes.sectionHeader}>
              <Title order={6} align="center">
                Tu Nutriólogo
              </Title>
            </Box>
            <Box p="sm" component="main">
              <Text size="sm" align="center">
                {appointment.nutritionist.name}{' '}
                {appointment.nutritionist.lastName}
              </Text>
            </Box>
          </Box>
          <Box component="section" className={classes.section}>
            <Box p="sm" component="header" className={classes.sectionHeader}>
              <Title order={6} align="center">
                Reagenda tu Cita
              </Title>
            </Box>
            <Box p="sm" component="main">
              <Stack spacing="md">
                <Text size="sm" align="center">
                  Recuerda que al reagendar una cita, se debe de volver a
                  confirmar por parte de tu nutriólogo.
                </Text>
                <Button color="lime">Reagendar cita</Button>
              </Stack>
            </Box>
          </Box>
          <Box component="section" className={classes.section}>
            <Box p="sm" component="header" className={classes.sectionHeader}>
              <Title order={6} align="center">
                ¿Cuándo?
              </Title>
            </Box>
            <Box p="sm" component="main">
              <Stack spacing="md">
                <Text size="sm" align="center">
                  <Text size="sm" align="center">
                    Tu cita es el día:
                    <br />
                    {format(new Date(), "PPPP '@' hh:mm a", {
                      locale: es,
                    })}
                  </Text>
                </Text>
              </Stack>
            </Box>
            <Box component="footer" className={classes.sectionFooter}>
              <Alert icon={<FontAwesomeIcon icon={faCircleExclamation} />}>
                Por favor apégate a estos horarios para que podamos atenderte de
                la mejor manera. Tendrás 15 minutos de tolerancia para tu
                prueba.
              </Alert>
            </Box>
          </Box>
        </Stack>
      )}
    </Drawer>
  );
};

export default NutritionistAppointmentDrawer;
