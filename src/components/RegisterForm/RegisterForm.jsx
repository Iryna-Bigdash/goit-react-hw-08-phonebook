import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import * as React from 'react';
import { useFormik } from 'formik';
import FilledInput from '@mui/material/FilledInput';
import styled from '@emotion/styled';
import { FormContainer, StyledForm, Title } from './RegisteerForm.styled';

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

const SubmitButton = styled.button`
  width: 180px;
  padding: 8px;
  align-self: center;
  font-size: 20px;
  color: #8b54c1;
  border: none;
  border-radius: 5%;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:focus,
  &:hover {
    background-color: #e7e6e6;
  }
`;

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(register(values));
      formik.resetForm();
    },
    validate: values => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Required';
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
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
      <Title>Registration Page</Title>
      <StyledForm onSubmit={formik.handleSubmit}>
        <InputLabel>
          Username
          <InputField
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </InputLabel>
        {formik.touched.name && formik.errors.name && (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        )}
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
        <SubmitButton type="submit">Register</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};
