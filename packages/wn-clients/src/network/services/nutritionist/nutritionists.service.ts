import { useWellnubAPI } from 'hooks';
import { TWNNutritionist } from '@wn/shared';
import { useQuery } from '@tanstack/react-query';
import { useTypedDispatch } from 'state/store';
import { setNutritionists } from 'state/slices/nutritionists/nutritionists.slice';
import { QUERY_KEYS } from 'utils/constants.util';

const useGetNutritionistsQuery = () => {
  const wellnub = useWellnubAPI();
  return async () => {
    const { data } = await wellnub.get<TWNNutritionist[]>(
      '/client/user/nutritionist',
    );
    return data;
  };
};

const useGetNutritionistsService = () => {
  const query = useGetNutritionistsQuery();
  const dispatch = useTypedDispatch();

  return useQuery([QUERY_KEYS.NUTRITIONIST.GET_NUTRITIONISTS], query, {
    onSuccess: data => {
      dispatch(setNutritionists(data));
    },
  });
};

export default useGetNutritionistsService;
