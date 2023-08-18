import { FormControl, FormGroup, TextField, Button } from '@mui/material';

const FormComp = () => {
  return (
    <form>
      <FormControl>
        <FormGroup>
          <TextField
            type='name'
            error={false}
            id='filled-error-helper-text'
            helperText='Incorrect entry.'
            placeholder='enter your name'
            sx={{ color: 'black', width: '450px' }}
          />
          <TextField
            type='number'
            error={false}
            id='filled-error-helper-text'
            helperText='Incorrect entry.'
            placeholder='enter your number'
          />
          <TextField
            type='email'
            error={false}
            id='filled-error-helper-text'
            helperText='Incorrect entry.'
            placeholder='enter your email'
          />
        </FormGroup>
        <Button
          sx={{
            color: 'black',
            width: '150px',
            height: '45px',
            fontSize: '19px',
            fontWeight: '600',
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
