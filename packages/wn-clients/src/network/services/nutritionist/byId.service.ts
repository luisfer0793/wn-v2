import { useWellnubAPI } from 'hooks';
import { TWNNutritionist } from '@wn/shared';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from 'utils/constants.util';

export const useGetNutritionistByIdQuery = (id: string) => {
  const wellnub = useWellnubAPI();

  return async () => {
    const { data } = await wellnub.get<TWNNutritionist>(
      `/client/user/nutritionist/${id}`,
    );
    return data;
  };
};

const useGetNutritionistByIdService = (id: string) => {
  const query = useGetNutritionistByIdQuery(id);

  return useQuery([QUERY_KEYS.NUTRITIONIST.GET_BY_ID, id], query, {
    enabled: !!id,
  });
};

export default useGetNutritionistByIdService;
