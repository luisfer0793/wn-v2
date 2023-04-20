import { useMemo } from 'react';
import { useQueries } from '@tanstack/react-query';

import { TWNInbodyAppointment, TWNNutritionistAppointment } from '@wn/shared';

import { useGetInbodyAppointmentsQuery } from 'network/services/appointments/inbody.service';
import { useGetNutritionistAppointmentsQuery } from 'network/services/appointments/nutritionist.service';

import { useTypedDispatch } from 'state/store';
import {
  setInbodyAppointments,
  setNutritionistAppointments,
} from 'state/slices/appointments/appointments.slice';

import { QUERY_KEYS } from 'utils/constants.util';

const useGetDashboardData = () => {
  const inbodyAppointmentsQuery = useGetInbodyAppointmentsQuery();
  const nutritionistAppointmentsQuery = useGetNutritionistAppointmentsQuery();

  const dispatch = useTypedDispatch();

  const results = useQueries({
    queries: [
      {
        queryKey: [QUERY_KEYS.APPOINTMENTS.INBODY.GET],
        queryFn: inbodyAppointmentsQuery,
        onSuccess: (data: TWNInbodyAppointment[]) => {
          dispatch(setInbodyAppointments(data));
        },
      },
      {
        queryKey: [QUERY_KEYS.APPOINTMENTS.NUTRITIONIST.GET],
        queryFn: nutritionistAppointmentsQuery,
        onSuccess: (data: TWNNutritionistAppointment[]) => {
          dispatch(setNutritionistAppointments(data));
        },
      },
    ],
  });

  const isLoading = useMemo(
    () => results.some(result => result.isLoading),
    [results],
  );

  const isError = useMemo(
    () => results.some(result => result.isError),
    [results],
  );

  const data = useMemo(
    () => ({
      inbodyAppointments: results[0].data,
      nutritionistAppointments: results[1].data,
    }),
    [results],
  );

  return { data, isLoading, isError };
};

export default useGetDashboardData;
