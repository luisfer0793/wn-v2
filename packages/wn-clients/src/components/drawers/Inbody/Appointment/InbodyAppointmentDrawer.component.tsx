import { Drawer, Title } from '@mantine/core';
import useDrawer from 'hooks/useDrawer.hook';
import { DRAWERS } from 'utils/constants.util';

const InbodyAppointmentDrawer = () => {
  const { isVisible, closeDrawerHandler } = useDrawer(
    DRAWERS.INBODY_APPOINTMENT_DETAILS,
  );

  return (
    <Drawer
      size="xl"
      position="right"
      opened={isVisible}
      onClose={closeDrawerHandler}
    >
      <Title order={6}>HI</Title>
    </Drawer>
  );
};

export default InbodyAppointmentDrawer;
