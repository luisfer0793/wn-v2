import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Group, Select, Stepper } from '@mantine/core';
import { useTypedSelector } from 'state/store';
import { myNutritionistServicesSelector } from 'state/slices/myNutritionist/myNutritionist.selector';

const MAX_STEP = 3;
const MIN_STEP = 0;

const NewMedicalAppointmentPage: FC = () => {
  const [activeStep, setActiveStep] = useState(MIN_STEP);
  const [highestStepVisited, setHighestStepVisited] = useState(activeStep);

  const nutritionistServices = useTypedSelector(myNutritionistServicesSelector);

  const {} = useForm();

  const stepChangeHandler = (nextStep: number) => {
    if (nextStep > MAX_STEP || nextStep < MIN_STEP) return;
    setActiveStep(nextStep);
    setHighestStepVisited(step => Math.max(step, nextStep));
  };

  const shouldAllowSelectStep = (step: number) =>
    highestStepVisited >= step && activeStep !== step;

  return (
    <Box>
      <Stepper color="lime" active={activeStep} onStepClick={setActiveStep}>
        <Stepper.Step
          label="Paso 1"
          description="Selecciona un servicio"
          allowStepSelect={shouldAllowSelectStep(0)}
        >
          <Select
            data={nutritionistServices}
            placeholder="Selecciona un servicio"
            label="Servicio"
          />
        </Stepper.Step>
        <Stepper.Step
          label="Paso 2"
          description="Selecciona la hora y fecha"
          allowStepSelect={shouldAllowSelectStep(1)}
        >
          2
        </Stepper.Step>
        <Stepper.Step
          label="Paso 3"
          description="Confirma tu cita"
          allowStepSelect={shouldAllowSelectStep(2)}
        >
          3
        </Stepper.Step>
      </Stepper>
      <Group position="center" mt="xl">
        <Button
          variant="default"
          onClick={() => stepChangeHandler(activeStep - 1)}
        >
          Siguiente
        </Button>
        <Button onClick={() => stepChangeHandler(activeStep + 1)}>
          Continuar
        </Button>
      </Group>
    </Box>
  );
};

export default NewMedicalAppointmentPage;
