import {
  Alert,
  Box,
  Button,
  Center,
  Container,
  Grid,
  Loader,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useTypedSelector } from 'state/store';
import {
  inbodyAppointmentsSelectors,
  nutritionistAppointmentsSelector,
} from 'state/slices/appointments/appointments.selector';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { InbodyAppointmentCard, NutritionistAppointmentCard } from 'components';

import { useGetDashboardData } from 'hooks';

import { useStyles } from './Dashboard.styles';

const DashboardPage = () => {
  const { isLoading, isError } = useGetDashboardData();

  const nutritionistAppointments = useTypedSelector(
    nutritionistAppointmentsSelector,
  );

  const inbodyAppointments = useTypedSelector(
    inbodyAppointmentsSelectors.selectAll,
  );

  const { classes } = useStyles();

  if (isLoading) {
    return (
      <Container>
        <Center>
          <Loader />
        </Center>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Center>
          <Alert
            icon={<FontAwesomeIcon icon={faCircleExclamation} />}
            title="Upps!"
            color="red"
          >
            Algo salió mal, no pudimos cargar la información, intenta de nuevo
            más tarde.
          </Alert>
        </Center>
      </Container>
    );
  }

  return (
    <Container fluid py={24}>
      <Title order={1} align="center" pb={24}>
        Dashboard
      </Title>
      <Stack spacing="xl">
        <Box component="section" className={classes.section}>
          <Box p="lg" className={classes.sectionHeader}>
            <Title order={5}>Consultas con Nutriólogo</Title>
            <Text size="sm" color="dimmed">
              Aquí podrás encontrar todas las citas que tienes agendadas con tu
              nutiólogo.
            </Text>
          </Box>
          <Box p="lg">
            <Grid>
              {nutritionistAppointments.map(appointment => (
                <Grid.Col key={appointment._id} xs={12} sm={6} md={3}>
                  <NutritionistAppointmentCard appointment={appointment} />
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box component="section" className={classes.section}>
          <Box p="lg" className={classes.sectionHeader}>
            <Title order={5}>Análisis InBody&reg;</Title>
            <Text size="sm" color="dimmed">
              Aquí podrás encontrar los próximos análisis InBody&reg; que tienes
              programados.
            </Text>
          </Box>
          <Box p="lg">
            <Grid>
              {inbodyAppointments.map(appointment => (
                <Grid.Col key={appointment._id} xs={12} sm={6} md={3}>
                  <InbodyAppointmentCard appointment={appointment} />
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default DashboardPage;
