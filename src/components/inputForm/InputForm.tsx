import {TextField} from '@mui/material';
import {FC, ChangeEvent, memo} from 'react';

interface IInputFormProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  validate: (inputName: string) => string;
  name: string;
}

const InputForm: FC<IInputFormProps> = ({
  label,
  value,
  onChange,
  name,
  validate,
}) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      fullWidth
      label={label}
      variant='outlined'
      helperText={validate(name)}
    />
  );
};

export default memo(InputForm);
