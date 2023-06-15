import { useCallback, useMemo } from 'react';
import { useTypedDispatch } from 'state/store';
import { useQueries } from '@tanstack/react-query';
import { useGetNutritionalPlanQuery } from 'network/services/common/nutritionalPlan.service';
import { QUERY_KEYS } from 'utils/constants.util';

const useGetCommonData = () => {
  const nutritionalPlanQuery = useGetNutritionalPlanQuery();

  const dispatch = useTypedDispatch();

  const results = useQueries({
    queries: [
      {
        enabled: true,
        queryKey: [QUERY_KEYS.COMMON.GET_NUTRITIONAL_PLAN],
        queryFn: nutritionalPlanQuery,
        onSuccess: (data: {}) => {
          console.log('Comun');
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
      nutritionalPlan: results[0].data,
    }),
    [results],
  );

  return { data, isLoading, isError };
};

export default useGetCommonData;
