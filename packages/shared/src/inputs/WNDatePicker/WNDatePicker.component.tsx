import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { DatePicker, DatePickerProps } from '@mantine/dates';

interface WNDatePickerProps<TFormData extends FieldValues>
  extends DatePickerProps {
  name: Path<TFormData>;
  control: Control<TFormData>;
}

const WNDatePicker = <TValues extends FieldValues>({
  name,
  control,
  ...restProps
}: WNDatePickerProps<TValues>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return <DatePicker {...restProps} {...field} />;
};

export default WNDatePicker;
