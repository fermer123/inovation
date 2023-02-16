import {Stack} from '@mui/material';
import Box from '@mui/material/Box';
import {FC, useState, useCallback} from 'react';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';
import PostButton from './components/PostButton/PostButton';
import Comments from './components/comments/Comments';
import useInput from './components/hooks/input';
import InputForm from './components/inputForm/InputForm';
import {IComment} from './types/type';

const InputFormWrapper = styled(Box)`
  padding: 15px 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const App: FC = () => {
  const [data, setData] = useState<IComment[]>([]);

  const name = useInput();
  const email = useInput();
  const comment = useInput();
  const isValidEmail = (validateEmail: string) =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      validateEmail,
    );

  const validate = (inputName: string) => {
    if (inputName === 'email') {
      return isValidEmail(email.value) && email.value.length
        ? ''
        : 'неверный E-mail или пустое значение';
    }
    if (inputName === 'name') {
      return name.value.length ? '' : 'поле не должно быть пустым';
    }
    return comment.value.length ? '' : 'поле не должно быть пустым';
  };

  const postDataMemo = useCallback(() => {
    if (
      name.value &&
      email.value &&
      comment.value &&
      isValidEmail(email.value)
    ) {
      setData([
        ...data,
        {
          id: parseInt(uuidv4(), 36),
          name: name.value,
          comment: comment.value,
          email: email.value,
          raiting: 0,
          date: Date.now(),
        },
      ]);
      name.setValue('');
      comment.setValue('');
      email.setValue('');
    }
  }, [comment, data, email, name]);

  return (
    <Box sx={{mx: 1, mt: 1}}>
      <InputFormWrapper>
        <Stack direction='row' spacing={2}>
          <InputForm
            label='Введите имя'
            name='name'
            validate={validate}
            {...name}
          />
          <InputForm
            label='Введите e-mail'
            name='email'
            validate={validate}
            {...email}
          />
        </Stack>
        <Stack direction='row' spacing={2}>
          <InputForm
            label='Введите комментарий'
            name='comment'
            validate={validate}
            {...comment}
          />
        </Stack>
        <PostButton postData={postDataMemo} />
        <Comments data={data} setData={setData} />
      </InputFormWrapper>
    </Box>
  );
};

export default App;
