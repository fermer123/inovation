import Box from '@mui/material/Box';
import {FC} from 'react';
import InputForm from './components/inputForm/InputForm';

const App: FC = () => {
  return (
    <Box sx={{mx: 1, mt: 1}}>
      <InputForm />
    </Box>
  );
};

export default App;
