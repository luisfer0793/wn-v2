import { DatePickerInput, DatePickerInputProps } from '@mantine/dates';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

interface WNDateRangeInputProps<TFormData extends FieldValues>
  extends DatePickerInputProps {
  name: Path<TFormData>;
  control: Control<TFormData>;
}

const WNDateRangeInput = <TValues extends FieldValues>({
  name,
  control,
  ...restProps
}: WNDateRangeInputProps<TValues>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  return (
    <DatePickerInput
      type="range"
      {...restProps}
      {...field}
      error={error?.message}
    />
  );
};

export default WNDateRangeInput;
