import { FC } from 'react';
import { Button, Container, Grid, Stack, Title } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { WNDatePicker } from '@wn/shared';
import { add, sub } from 'date-fns';

const InbodySchedulePage: FC = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      date: new Date(),
    },
  });

  const onSubmitHandler = handleSubmit(data => {
    console.log('La data es:', data);
  });

  return (
    <Container fluid py={24}>
      <Title order={1} align="center" pb={24}>
        Agenda un análisis InBody
      </Title>
      <form onSubmit={onSubmitHandler}>
        <Stack>
          <Grid>
            <Grid.Col xs={6}>
              <WNDatePicker
                size="lg"
                name="date"
                control={control}
                minDate={sub(new Date(), { days: 15 })}
                maxDate={add(new Date(), { days: 15 })}
              />
            </Grid.Col>
          </Grid>
          <Button type="submit">Enviar</Button>
        </Stack>
      </form>
    </Container>
  );
};

export default InbodySchedulePage;
