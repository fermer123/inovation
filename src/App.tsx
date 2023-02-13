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
  const name = useInput();
  const email = useInput();
  const comment = useInput();

  const [data, setData] = useState<IComment[]>([
    {
      id: 1,
      name: 'qwe',
      email: 'qwe@mail.ru',
      comment: 'qweqwe',
      raiting: 1,
    },
    {
      id: 2,
      name: 'asd',
      email: 'asd@mail.ru',
      comment: 'asdasd',
      raiting: 11,
    },
  ]);

  const postDataMemo = useCallback(() => {
    setData([
      ...data,
      {
        id: parseInt(uuidv4(), 36),
        name: name.value,
        comment: comment.value,
        email: email.value,
        raiting: 0,
      },
    ]);
    name.setValue('');
    comment.setValue('');
    email.setValue('');
  }, [comment, data, email, name]);
  return (
    <Box sx={{mx: 1, mt: 1}}>
      <InputFormWrapper>
        <Stack direction='row' spacing={2}>
          <InputForm label='Введите имя' {...name} />
          <InputForm label='Введите e-mail' {...email} />
        </Stack>
        <Stack direction='row' spacing={2}>
          <InputForm label='Введите комментарий' {...comment} />
        </Stack>
        <PostButton postData={postDataMemo} />
        <Comments data={data} setData={setData} />
      </InputFormWrapper>
    </Box>
  );
};

export default App;
