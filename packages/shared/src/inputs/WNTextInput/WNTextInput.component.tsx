import { TextInput, TextInputProps } from '@mantine/core';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

interface WNTextInputProps<TFormData extends FieldValues>
  extends TextInputProps {
  name: Path<TFormData>;
  control: Control<TFormData>;
}

const WNTextInput = <TValues extends FieldValues>({
  name,
  control,
  ...restProps
}: WNTextInputProps<TValues>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return <TextInput {...restProps} {...field} error={error?.message} />;
};

export default WNTextInput;
