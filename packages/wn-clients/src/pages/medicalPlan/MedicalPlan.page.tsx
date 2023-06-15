import { FC } from 'react';
import { Alert, Center, Container, Grid, Loader } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { NutritionalPlanCard } from 'components';
import { useGetMedicalProgressData } from 'hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const MedicalPlanPage: FC = () => {
  const { isLoading, isError } = useGetMedicalProgressData();

  if (isLoading) {
    return (
      <Container py={24}>
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
    <Grid>
      <Grid.Col xs={12} sm={3}>
        <NutritionalPlanCard />
      </Grid.Col>
      <Grid.Col xs={12} sm={9}>
        <Outlet />
      </Grid.Col>
    </Grid>
  );
};

export default MedicalPlanPage;
