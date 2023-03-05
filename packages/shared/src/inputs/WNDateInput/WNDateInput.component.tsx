import { DatePickerInput, DatePickerInputProps } from '@mantine/dates';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

interface WNDateInputProps<TFormData extends FieldValues>
  extends DatePickerInputProps {
  name: Path<TFormData>;
  control: Control<TFormData>;
}

const WNDateInput = <TValues extends FieldValues>({
  name,
  control,
  ...restProps
}: WNDateInputProps<TValues>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  return <DatePickerInput {...restProps} {...field} error={error?.message} />;
};

export default WNDateInput;
