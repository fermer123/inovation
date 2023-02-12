import {FC} from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import {Button, ButtonGroup, Card, CardContent, Box} from '@mui/material';
import {IComment} from '@src/types/type';

const CommentWrapperItem = styled(Card)`
  padding: 15px 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  border: 1px solid #2196f3;
`;
const CommentWrapperItemTopContent = styled(CardContent)`
  padding: 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentWrapperItemTopContentInfo = styled(Box)`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const CommentWrapperItemTopContentInfoName = styled.p`
  font-size: 2rem;
`;

const CommentWrapperItemTopContentInfoRaiting = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CommentWrapperItemTopContentInfoRaitingNumber = styled.p`
  color: #2196f3;
`;

const CommentWrapperItemConmment = styled(CardContent)``;

const CommentWrapperItemBottomContent = styled(CardContent)`
  align-self: flex-end;
  justify-self: flex-start;
  padding: 0 0;
`;

const Item: FC<IComment> = ({comment, name, raiting}) => {
  return (
    <CommentWrapperItem>
      <CommentWrapperItemTopContent>
        <CommentWrapperItemTopContentInfo>
          <Avatar>{name}</Avatar>
          <CommentWrapperItemTopContentInfoName>
            {name}
          </CommentWrapperItemTopContentInfoName>
        </CommentWrapperItemTopContentInfo>
        <CommentWrapperItemTopContentInfoRaiting>
          <CommentWrapperItemTopContentInfoRaitingNumber>
            Рейтинг: {raiting}
          </CommentWrapperItemTopContentInfoRaitingNumber>
          <ButtonGroup variant='outlined'>
            <Button>-</Button>
            <Button>+</Button>
          </ButtonGroup>
        </CommentWrapperItemTopContentInfoRaiting>
      </CommentWrapperItemTopContent>
      <CommentWrapperItemConmment>{comment}</CommentWrapperItemConmment>
      <CommentWrapperItemBottomContent>
        1 час назад
      </CommentWrapperItemBottomContent>
    </CommentWrapperItem>
  );
};

export default Item;
