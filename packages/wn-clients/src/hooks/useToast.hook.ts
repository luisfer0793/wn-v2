import { showNotification } from '@mantine/notifications';

import { toastStyleHelper } from 'helpers';
import { ToastVariant } from 'utils/types.util';

interface ToastOptionsProps {
  title?: string;
  message: string;
  variant: ToastVariant;
}

const useToast =
  () =>
  (options: ToastOptionsProps = { variant: 'success', message: '' }) => {
    showNotification({
      ...options,
      styles: toastStyleHelper(options.variant),
    });
  };

export default useToast;
