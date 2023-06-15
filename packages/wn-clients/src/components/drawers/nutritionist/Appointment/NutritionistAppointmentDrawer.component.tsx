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
import {
  faCircleExclamation,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';

import useDrawer from 'hooks/useDrawer.hook';
import { DRAWERS } from 'utils/constants.util';

import { useTypedSelector } from 'state/store';
import { nutritionistAppointmentSelector } from 'state/slices/appointments/appointments.selector';

import { useStyles } from './NutritionistAppointmentDrawer.styles';
import { useGetNutritionistByIdQuery } from 'network/services';
import { useEffect, useState } from 'react';

const NutritionistAppointmentDrawer = () => {
  const appointment = useTypedSelector(nutritionistAppointmentSelector);

  const {
    data: {
      name,
      lastName,
      nutritionistProfile: {
        settings: { canReschedule } = { canReschedule: true },
      } = {},
    } = {},
    isError,
    isLoading,
  } = useGetNutritionistByIdQuery(appointment?.nutritionist?._id ?? '');

  const { isVisible, closeDrawerHandler } = useDrawer(
    DRAWERS.NUTRITIONIST_APPOINTMNET_DETAILS,
  );

  const { classes } = useStyles();

  const onRescheduleAppointmentHandler = () => {};
  const onCancelAppointmentHandler = () => {};

  return (
    <Drawer
      size={500}
      position="right"
      opened={isVisible}
      title="Consulta Nutricional"
      onClose={closeDrawerHandler}
      scrollAreaComponent={ScrollArea.Autosize}
    >
      <Stack spacing="xl">
        {/* ---- TU NUTRIÓLOGO ---- */}
        <Box component="section" className={classes.section}>
          <Box p="sm" component="header" className={classes.sectionHeader}>
            <Title order={6} align="center">
              Tu Nutriólogo
            </Title>
          </Box>
          <Box p="sm" component="main">
            <Text size="sm" align="center">
              {name} {lastName}
            </Text>
          </Box>
        </Box>

        {/* ---- REAGENDAR ---- */}
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
              <Button
                color="lime"
                onClick={onRescheduleAppointmentHandler}
                loading={isLoading}
                disabled={isError || !canReschedule}
              >
                Reagendar cita
              </Button>
            </Stack>
          </Box>
          {!canReschedule && (
            <Box component="footer" className={classes.sectionFooter}>
              <Alert
                icon={<FontAwesomeIcon icon={faTriangleExclamation} />}
                color="orange"
              >
                No es posible reagendar la consulta, consulta a tu nutriólogo.
              </Alert>
            </Box>
          )}
          {isError && (
            <Box component="footer" className={classes.sectionFooter}>
              <Alert
                icon={<FontAwesomeIcon icon={faTriangleExclamation} />}
                color="red"
              >
                En este momento no puedes reagendar, intenta de nuevo más tarde.
              </Alert>
            </Box>
          )}
        </Box>

        {/* ---- CANCELAR ---- */}
        <Box component="section" className={classes.section}>
          <Box p="sm" component="header" className={classes.sectionHeader}>
            <Title order={6} align="center">
              Cancela tu Cita
            </Title>
          </Box>
          <Box p="sm" component="main">
            <Stack spacing="md">
              <Text size="sm" align="center">
                Recuerda que cuando cancelas una cita, se notifica de manera
                inmediata a tu nutriólogo.
              </Text>
              <Button
                color="red"
                loading={isLoading}
                disabled={isError || !canReschedule}
              >
                Cancelar cita
              </Button>
            </Stack>
          </Box>
          {!canReschedule && (
            <Box component="footer" className={classes.sectionFooter}>
              <Alert
                icon={<FontAwesomeIcon icon={faTriangleExclamation} />}
                color="orange"
              >
                No es posible cancelar la consulta, consulta a tu nutriólogo.
              </Alert>
            </Box>
          )}
          {isError && (
            <Box component="footer" className={classes.sectionFooter}>
              <Alert
                icon={<FontAwesomeIcon icon={faTriangleExclamation} />}
                color="red"
              >
                En este momento no puedes cancelar, intenta de nuevo más tarde.
              </Alert>
            </Box>
          )}
        </Box>

        {/* ---- CUANDO ---- */}
        <Box component="section" className={classes.section}>
          <Box p="sm" component="header" className={classes.sectionHeader}>
            <Title order={6} align="center">
              ¿Cuándo?
            </Title>
          </Box>
          <Box p="sm" component="main">
            <Stack spacing="md">
              <Text size="sm" align="center">
                Tu cita es el día:
                <br />
                {format(new Date(), "PPPP '@' hh:mm a", {
                  locale: es,
                })}
              </Text>
            </Stack>
          </Box>
          <Box component="footer" className={classes.sectionFooter}>
            <Alert icon={<FontAwesomeIcon icon={faCircleExclamation} />}>
              Por favor apégate a estos horarios para que podamos atenderte de
              la mejor manera. Tendrás 15 minutos de tolerancia para tu prueba.
            </Alert>
          </Box>
        </Box>
      </Stack>
    </Drawer>
  );
};

export default NutritionistAppointmentDrawer;
