import { useWellnubAPI } from 'hooks';
import { useQuery } from '@tanstack/react-query';
import { TWNNutritionistAppointment } from '@wn/shared';

import { useTypedDispatch } from 'state/store';
import { setNutritionistAppointments } from 'state/slices/appointments/appointments.slice';

import { QUERY_KEYS } from 'utils/constants.util';

export const useGetNutritionistAppointmentsQuery = () => {
  const wellnub = useWellnubAPI();

  return async () => {
    const { data } = await wellnub.get<TWNNutritionistAppointment[]>(
      '/client/wellnubService/nutritionistAppointment',
    );
    return data;
  };
};

const useGetAppointmentsWithNutritionistService = () => {
  const dispatch = useTypedDispatch();
  const query = useGetNutritionistAppointmentsQuery();

  return useQuery([QUERY_KEYS.APPOINTMENTS.NUTRITIONIST.GET], query, {
    onSuccess: data => {
      dispatch(setNutritionistAppointments(data));
    },
  });
};

export default useGetAppointmentsWithNutritionistService;
