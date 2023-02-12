import {IComment} from '@src/types/type';
import {FC, useState} from 'react';
import {Box} from '@mui/material';
import styled from 'styled-components';
import Item from '../Item/Item';

const Comments: FC = () => {
  const [data] = useState<IComment[]>([
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
    {
      id: 3,
      name: 'zxc',
      email: 'zxc@mail.ru',
      comment: 'zxczxc',
      raiting: 10,
    },
  ]);

  const CommentWrapper = styled(Box)`
    padding: 15px 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
  `;

  return (
    <CommentWrapper>
      {data.map((e) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Item key={e.id} {...e} />
      ))}
    </CommentWrapper>
  );
};

export default Comments;
