import {TextField} from '@mui/material';
import {FC, ChangeEvent, memo} from 'react';

interface IInputFormProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  validate: boolean;
}

const InputForm: FC<IInputFormProps> = ({label, value, onChange, validate}) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      fullWidth
      label={label}
      variant='outlined'
      helperText={validate ? '' : 'неверный E-mail или пустое значение'}
    />
  );
};

export default memo(InputForm);
