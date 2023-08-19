import { FormControl, FormGroup, TextField, Button } from '@mui/material';

const FormComp = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <FormControl>
        <FormGroup>
          <TextField
            type='name'
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
