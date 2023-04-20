import { FC } from 'react';
import { useTypedSelector } from 'state/store';
import { isAuthenticatedSelector } from 'state/slices/authentication/authentication.selector';

import InbodyAppointmentDrawer from '../Inbody/Appointment/InbodyAppointmentDrawer.component';
import NutritionistAppointmentDrawer from '../nutritionist/Appointment/NutritionistAppointmentDrawer.component';

const DrawerSwitcher: FC = () => {
  const isAuthenticated = useTypedSelector(isAuthenticatedSelector);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <InbodyAppointmentDrawer />
      <NutritionistAppointmentDrawer />
    </>
  );
};

export default DrawerSwitcher;
