import { FormControl, FormGroup, TextField, Button } from '@mui/material';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const FormComp = () => {
  const [err, setErr] = useState<any>({
    nameEr: '',
    numEr: '',
    emailEr: '',
  });
  const [inputData, setInputData] = useState<any>({
    username: '',
    num: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputData.username == '') {
      setErr({ ...err, nameEr: 'Required' });
    } else if (!/^[a-zA-Z ]+$/.test(inputData.username)) {
      setErr({ ...err, nameEr: 'Wrong format' });
    } else if (inputData.num == '') {
      setErr({ ...err, numEr: 'Number should be 10 digits' });
    } else if (!/^[0-9]+$/.test(inputData.num)) {
      setErr({ ...err, numEr: 'Wrong format' });
    } else if (inputData.email == '') {
      setErr({ ...err, emailEr: ' Required' });
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputData.email)
    ) {
      setErr({ ...err, emailEr: 'Wrong format' });
    } else {
      navigate('/second');
      localStorage.setItem('data', JSON.stringify(inputData));
    }
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
            type='text'
            placeholder='enter your name'
            sx={{ color: 'black', width: '450px', margin: '25px' }}
            name='username'
            onChange={(e) => {
              setInputData({
                ...inputData,
                [e.target.name]: e.target.value,
              });
            }}
          />
          {err.nameEr ? (
            <p>
              <small>{err.nameEr}</small>
            </p>
          ) : null}
          <TextField
            type='number'
            placeholder='enter your number'
            sx={{ color: 'black', width: '450px', margin: '25px' }}
            name='num'
            onChange={(e) => {
              setInputData({ ...inputData, [e.target.name]: e.target.value });
            }}
          />
          {err.numEr ? (
            <p>
              <small>{err.numEr}</small>
            </p>
          ) : null}

          <TextField
            type='email'
            placeholder='enter your email'
            sx={{ color: 'black', width: '450px', margin: '25px' }}
            name='email'
            onChange={(e) => {
              setInputData({ ...inputData, [e.target.name]: e.target.value });
            }}
          />
          {err.emailEr ? (
            <p>
              <small>{err.emailEr}</small>
            </p>
          ) : null}
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
