import { NumberInput, NumberInputProps } from '@mantine/core';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

interface WNNumberInputProps<TFormData extends FieldValues>
  extends NumberInputProps {
  name: Path<TFormData>;
  control: Control<TFormData>;
}

const WNNumberInput = <TValues extends FieldValues>({
  name,
  control,
  ...restProps
}: WNNumberInputProps<TValues>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });
  return <NumberInput {...restProps} {...field} error={error?.message} />;
};

export default WNNumberInput;
