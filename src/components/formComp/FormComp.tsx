import { FormControl, FormGroup, TextField, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

interface FormValues {
  name: string;
  number: number;
  email: string;
}

const FormComp = () => {
  const navigate = useNavigate();

  const handleSubmitData: void = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/second');
  };

  return (
    <form onSubmit={() => {}}>
      <FormControl>
        <FormGroup>
          <TextField
            type='text'
            placeholder='enter your name'
            sx={{ color: 'black', width: '450px', margin: '25px' }}
          />

          <TextField
            type='number'
            placeholder='enter your number'
            sx={{ color: 'black', width: '450px', margin: '25px' }}
          />
          <TextField
            type='email'
            placeholder='enter your email'
            sx={{ color: 'black', width: '450px', margin: '25px' }}
          />
        </FormGroup>
        <Button
          sx={{
            color: 'black',
            width: '150px',
            height: '45px',
            fontSize: '19px',
            fontWeight: '600',
            margin: '25px',
          }}
          type='submit'
          variant='outlined'
        >
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default FormComp;
