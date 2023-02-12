import {Box, TextField} from '@mui/material';
import {FC, useState} from 'react';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';
import Comments from '../comments/Comments';

const InputFormWrapper = styled(Box)`
  padding: 15px 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const InputFormWrapperDataBlock = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const InputForm: FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  return (
    <div>
      <InputFormWrapper>
        <InputFormWrapperDataBlock>
          <TextField
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            fullWidth
            label='Введите имя'
            variant='outlined'
          />
          <TextField
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            fullWidth
            label='Введите E-mail'
            variant='outlined'
          />
        </InputFormWrapperDataBlock>
        <TextField
          value={comment}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setComment(e.target.value)
          }
          label='Введите комментарий'
          variant='outlined'
          fullWidth
          tabIndex={0}
        />
      </InputFormWrapper>
      <Comments />
    </div>
  );
};

export default InputForm;
