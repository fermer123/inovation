import {FC} from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: black;
`;
const App: FC = () => {
  return <AppWrapper>123</AppWrapper>;
};

export default App;
