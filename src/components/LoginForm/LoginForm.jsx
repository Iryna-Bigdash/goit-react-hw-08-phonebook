import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import * as React from 'react';
import { useFormik } from 'formik';
import FilledInput from '@mui/material/FilledInput';
import styled from '@emotion/styled';
import { FormContainer, StyledForm, SubmitButton, Title } from './LoginForm.styled';


const InputLabel = styled.label`
  margin-bottom: 5px;
  padding: 4px;
  color: purple;
`;

const InputField = styled(FilledInput)`
 padding: 4px;
  width: 100%;
  background-color: white;

  && {
    input {
      &:focus,
      &:hover {
        background-color: white;
      }
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 15px;
  font-size: 14px;
`;


export const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(logIn(values));
      formik.resetForm();
    },
    validate: values => {
      const errors = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
      }

      return errors;
    },
  });

  return (
    <FormContainer>
      <Title>Login Page</Title>
      <StyledForm onSubmit={formik.handleSubmit}>   
     <InputLabel>
          Email
          <InputField
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </InputLabel>
        {formik.touched.email && formik.errors.email && (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        )}
        <InputLabel>
          Password
          <InputField
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </InputLabel>
        {formik.touched.password && formik.errors.password && (
          <ErrorMessage>{formik.errors.password}</ErrorMessage>
        )}
        <SubmitButton type="submit">Login</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};


   

