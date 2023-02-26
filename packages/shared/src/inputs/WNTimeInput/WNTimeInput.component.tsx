import { TimeInput, TimeInputProps } from '@mantine/dates';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

interface WNTimeInputProps<TFormData extends FieldValues>
  extends TimeInputProps {
  name: Path<TFormData>;
  control: Control<TFormData>;
}

const WNTimeInput = <TValues extends FieldValues>({
  name,
  control,
  ...restProps
}: WNTimeInputProps<TValues>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  return <TimeInput {...restProps} {...field} error={error?.message} />;
};

export default WNTimeInput;
