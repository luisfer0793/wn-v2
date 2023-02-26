import { DatePicker, DatePickerProps } from '@mantine/dates';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

interface WNDateInputProps<TFormData extends FieldValues>
  extends DatePickerProps {
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
  return <DatePicker {...restProps} {...field} error={error?.message} />;
};

export default WNDateInput;
