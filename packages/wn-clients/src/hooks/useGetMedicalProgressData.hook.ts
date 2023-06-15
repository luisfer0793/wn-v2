import { useMemo } from 'react';
import { batch } from 'react-redux';
import { useQueries } from '@tanstack/react-query';
import { useGetNutritionalPlanQuery } from 'network/services/common/nutritionalPlan.service';
import { TWNMedicalPlan, TWNNutritionist } from '@wn/shared';
import { QUERY_KEYS } from 'utils/constants.util';
import { useTypedDispatch } from 'state/store';
import { setMedicalPlan } from 'state/slices/medicalPlan/medicalPlan.slice';
import { setMyNutritionist } from 'state/slices/myNutritionist/myNutritionist.slice';

interface TWNMedicalPlanResponse {
  nutritionist: TWNNutritionist & {
    latestPlan: TWNMedicalPlan;
  };
}

const useGetMedicalProgressData = () => {
  const nutritionalPlanQuery = useGetNutritionalPlanQuery();

  const dispatch = useTypedDispatch();

  const results = useQueries({
    queries: [
      {
        queryKey: [QUERY_KEYS.COMMON.GET_NUTRITIONAL_PLAN],
        queryFn: nutritionalPlanQuery,
        onSuccess: ({
          nutritionist: { latestPlan, ...rest },
        }: TWNMedicalPlanResponse) => {
          batch(() => {
            dispatch(setMedicalPlan(latestPlan));
            dispatch(setMyNutritionist(rest));
          });
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

export default useGetMedicalProgressData;
