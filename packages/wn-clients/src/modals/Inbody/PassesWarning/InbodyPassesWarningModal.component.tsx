import { ContextModalProps } from '@mantine/modals';
import { Button } from '@mantine/core';
import { useTypedSelector } from 'state/store';
import { inbodyAppointmentsSelectors } from 'state/slices/appointments/appointments.selector';

interface InbodyPassesWarningModalProps {
  appointmentId: string;
}

const InbodyPassesWarningModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<InbodyPassesWarningModalProps>) => {
  const appointment = useTypedSelector(state =>
    inbodyAppointmentsSelectors.selectById(state, innerProps.appointmentId),
  );

  const onCloseModalHandler = () => {
    context.closeModal(id);
  };

  return (
    <>
      <pre>{JSON.stringify(appointment, null, 2)}</pre>
      <Button onClick={onCloseModalHandler}>Cerrar</Button>
    </>
  );
};

export default InbodyPassesWarningModal;
