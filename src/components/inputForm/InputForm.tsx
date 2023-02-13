import {TextField} from '@mui/material';
import {FC, ChangeEvent, memo} from 'react';

interface IInputFormProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: FC<IInputFormProps> = ({label, value, onChange}) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      fullWidth
      label={label}
      variant='outlined'
    />
  );
};

export default memo(InputForm);
