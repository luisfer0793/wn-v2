import { useTypedDispatch, useTypedSelector } from 'state/store';
import { drawerSelector } from 'state/slices/layout/layout.selector';
import { setDrawerVisibility } from 'state/slices/layout/layout.slice';

import { TDrawer } from 'utils/types.util';

const useDrawer = (name: TDrawer) => {
  const dispatch = useTypedDispatch();

  const { isVisible } = useTypedSelector(state => drawerSelector(state, name));

  const openDrawerHandler = () => {
    dispatch(
      setDrawerVisibility({
        name,
        isVisible: true,
      }),
    );
  };

  const closeDrawerHandler = () => {
    dispatch(
      setDrawerVisibility({
        name,
        isVisible: false,
      }),
    );
  };

  return {
    isVisible,
    openDrawerHandler,
    closeDrawerHandler,
  };
};

export default useDrawer;
