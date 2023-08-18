import { FormControl, FormGroup, TextField, Button } from '@mui/material';

const FormComp = () => {
  return (
    <form>
      <FormControl>
        <FormGroup>
          <TextField
            type='name'
            error
            id='filled-error-helper-text'
            helperText='Incorrect entry.'
            placeholder='enter your name'
          />
          <TextField
            type='number'
            error
            id='filled-error-helper-text'
            helperText='Incorrect entry.'
            placeholder='enter your number'
          />
          <TextField
            type='email'
            error
            id='filled-error-helper-text'
            helperText='Incorrect entry.'
            placeholder='enter your email'
          />
        </FormGroup>
      </FormControl>
    </form>
  );
};

export default FormComp;
