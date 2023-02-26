import { Autocomplete, AutocompleteProps } from '@mantine/core';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

interface WNAutocompleteInputProps<TFormData extends FieldValues>
  extends AutocompleteProps {
  name: Path<TFormData>;
  control: Control<TFormData>;
}

const WNAutocompleteInputComponent = <TValues extends FieldValues>({
  name,
  control,
  ...restProps
}: WNAutocompleteInputProps<TValues>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return <Autocomplete {...restProps} {...field} error={error?.message} />;
};

export default WNAutocompleteInputComponent;
