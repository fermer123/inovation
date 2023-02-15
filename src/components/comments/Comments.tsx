import {IComment} from '@src/types/type';
import {Dispatch, FC, SetStateAction, useCallback} from 'react';
import {Box} from '@mui/material';
import styled from 'styled-components';
import CommentItem from '../commentItem/CommentItem';

const CommentWrapper = styled(Box)`
  padding: 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

interface ICommentsProps {
  data: IComment[];
  setData: Dispatch<SetStateAction<IComment[]>>;
}

const Comments: FC<ICommentsProps> = ({data, setData}) => {
  const addRaiting = useCallback(
    (id: number) => {
      setData(
        data.map((e) => (e.id === id ? {...e, raiting: e.raiting + 1} : e)),
      );
    },
    [data, setData],
  );

  const subtractRaiting = useCallback(
    (id: number) => {
      setData(
        data.map((e) => (e.id === id ? {...e, raiting: e.raiting - 1} : e)),
      );
    },
    [data, setData],
  );

  return (
    <CommentWrapper>
      {data?.map((e: IComment) => (
        <CommentItem
          {...e}
          key={e.id}
          addRaiting={addRaiting}
          subtractRaiting={subtractRaiting}
        />
      ))}
    </CommentWrapper>
  );
};

export default Comments;
