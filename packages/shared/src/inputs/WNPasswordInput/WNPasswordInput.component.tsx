import { PasswordInput, PasswordInputProps } from '@mantine/core';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

interface WNPasswordInputProps<TFormData extends FieldValues>
  extends PasswordInputProps {
  name: Path<TFormData>;
  control: Control<TFormData>;
}

const WNPasswordInput = <TValues extends FieldValues>({
  name,
  control,
  ...restProps
}: WNPasswordInputProps<TValues>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return <PasswordInput {...restProps} {...field} error={error?.message} />;
};

export default WNPasswordInput;
