import {IComment} from '@src/types/type';
import {FC} from 'react';
import {Box} from '@mui/material';
import styled from 'styled-components';
import CommentItem from '../commentItem/CommentItem';

const CommentWrapper = styled(Box)`
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;
interface ICommets {
  data: IComment[];
}
const Comments: FC<ICommets> = ({data}) => {
  return (
    <CommentWrapper>
      {data.map((e: IComment) => (
        <CommentItem key={e.id} {...e} />
      ))}
    </CommentWrapper>
  );
};

export default Comments;
