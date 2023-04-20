import { useWellnubAPI } from 'hooks';

import { useTypedDispatch } from 'state/store';
import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from 'utils/constants.util';

export const useGetInbodyAppointmentsQuery = () => {
  const wellnub = useWellnubAPI();

  return async () => {
    const { data } = await wellnub.get(
      '/client/inbodyPass?statusList=scheduled',
    );
    return data;
  };
};

const useGetInbodyAppointmentsService = () => {
  const dispatch = useTypedDispatch();
  const query = useGetInbodyAppointmentsQuery();

  return useQuery([QUERY_KEYS.APPOINTMENTS.INBODY.GET], query, {
    onSuccess: data => {
      console.log('Los inbody appointments son: ', data);
    },
  });
};

export default useGetInbodyAppointmentsService;
