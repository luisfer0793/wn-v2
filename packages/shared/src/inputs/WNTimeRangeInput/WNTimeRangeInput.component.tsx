import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { TimeRangeInput, TimeRangeInputProps } from '@mantine/dates';

interface WNTimeRangeInputProps<TFormData extends FieldValues>
  extends TimeRangeInputProps {
  name: Path<TFormData>;
  control: Control<TFormData>;
}

const WNTimeRangeInput = <TValues extends FieldValues>({
  name,
  control,
  ...restProps
}: WNTimeRangeInputProps<TValues>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  return <TimeRangeInput {...restProps} {...field} error={error?.message} />;
};

export default WNTimeRangeInput;
