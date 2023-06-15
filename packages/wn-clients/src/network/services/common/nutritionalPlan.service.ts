import { useWellnubAPI } from 'hooks';
import { useQuery } from '@tanstack/react-query';
import { useTypedDispatch } from 'state/store';
import { QUERY_KEYS } from 'utils/constants.util';

export const useGetNutritionalPlanQuery = () => {
  const wellnub = useWellnubAPI();

  return async () => {
    const { data } = await wellnub.get('/client/user/nutritionist/current');
    return data;
  };
};

const useGetNutritionalPlanService = () => {
  const dispatch = useTypedDispatch();
  const query = useGetNutritionalPlanQuery();

  return useQuery([QUERY_KEYS.COMMON.GET_NUTRITIONAL_PLAN], query, {
    onSuccess: data => {
      console.log('El plan nutricional es: ', data);
    },
  });
};

export default useGetNutritionalPlanService;
