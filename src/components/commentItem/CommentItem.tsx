import {FC, memo, useState, useCallback, useEffect} from 'react';
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

const CommentWrapperItemComment = styled(CardContent)`
  overflow-wrap: break-word;
`;

const CommentWrapperItemBottomContent = styled(CardContent)`
  align-self: flex-end;
  justify-self: flex-start;
  padding: 0 0;
`;

const CommentWrapperItemShowContent = styled(Box)`
  margin: 0 auto;
`;

interface ICommentItemProps extends IComment {
  addRaiting: (e: number) => void;
  subtractRaiting: (e: number) => void;
}
const CommentItem: FC<ICommentItemProps> = ({
  name,
  raiting,
  id,
  comment,
  date,
  addRaiting,
  subtractRaiting,
}) => {
  const [open, setOpen] = useState<boolean>(true);
  const [updateTimePassed, setuUpdateTimePassed] = useState<string>();
  const handleCommentOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  // eslint-disable-next-line consistent-return
  const dateHandler = (currentDate: number, commentDate: number) => {
    const min = 60000;
    const hour = 3600000;
    const day = 86400000;
    const timePassed = currentDate - commentDate;
    if (timePassed < hour) {
      return `${Math.floor(timePassed / min)} мин.`;
    }
    if (timePassed < day) {
      return `${Math.floor(timePassed / hour)} ч.`;
    }
    if (timePassed > day) {
      return `${Math.floor(timePassed / day)} д.`;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setuUpdateTimePassed(dateHandler(Date.now(), date));
    }, 60000);
    return () => clearInterval(interval);
  }, [date, updateTimePassed]);

  return (
    <CommentWrapperItem>
      {raiting <= -10 && open ? (
        <CommentWrapperItemShowContent onClick={handleCommentOpen}>
          Открыть комментарий
        </CommentWrapperItemShowContent>
      ) : (
        <>
          <CommentWrapperItemTopContent>
            <CommentWrapperItemTopContentInfo>
              <Avatar>{[...name].slice(0, 1)}</Avatar>
              <CommentWrapperItemTopContentInfoName>
                {name}
              </CommentWrapperItemTopContentInfoName>
            </CommentWrapperItemTopContentInfo>
            <CommentWrapperItemTopContentInfoRaiting>
              <CommentWrapperItemTopContentInfoRaitingNumber>
                Рейтинг: {raiting}
              </CommentWrapperItemTopContentInfoRaitingNumber>
              <ButtonGroup variant='outlined'>
                <Button onClick={() => subtractRaiting(id)}>-</Button>
                <Button onClick={() => addRaiting(id)}>+</Button>
              </ButtonGroup>
            </CommentWrapperItemTopContentInfoRaiting>
          </CommentWrapperItemTopContent>
          <CommentWrapperItemComment>{comment}</CommentWrapperItemComment>
          <CommentWrapperItemBottomContent>
            {updateTimePassed ?? '0 мин.'}
          </CommentWrapperItemBottomContent>
        </>
      )}
    </CommentWrapperItem>
  );
};

export default memo(CommentItem);
