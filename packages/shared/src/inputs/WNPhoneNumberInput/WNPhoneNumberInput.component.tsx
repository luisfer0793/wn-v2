import { Input, TextInputProps, useMantineTheme } from '@mantine/core';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { useStyles } from './WNPhoneNumberInput.styles';

interface WNPhoneNumberInput<TFormData extends FieldValues>
  extends TextInputProps {
  name: Path<TFormData>;
  control: Control<TFormData>;
}

const WNPhoneNumberInput = <TValues extends FieldValues>({
  name,
  control,
  ...restProps
}: WNPhoneNumberInput<TValues>): JSX.Element => {
  const {
    field: { value, onChange, ...restField },
    fieldState: { error },
  } = useController({ name, control });

  const theme = useMantineTheme();

  const { classes } = useStyles();

  return (
    <Input.Wrapper {...restProps} {...restField} error={error?.message}>
      <PhoneInput
        country="mx"
        value={value}
        onChange={(value, country, e, formattedValue) =>
          onChange(formattedValue)
        }
        masks={{ mx: '.. .... ....' }}
        dropdownStyle={{ fontFamily: theme.fontFamily }}
        buttonStyle={{
          borderColor: error ? theme.colors.red[6] : theme.colors.gray[4],
        }}
        inputStyle={{
          width: '100%',
          fontFamily: theme.fontFamily,
          borderColor: error ? theme.colors.red[6] : theme.colors.gray[4],
        }}
        containerClass={classes.container}
      />
    </Input.Wrapper>
  );
};

export default WNPhoneNumberInput;
