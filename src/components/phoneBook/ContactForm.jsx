import { Label, StyledForm, InvalidValue } from './PhoneBook.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import React from 'react';

export const ContactForm = props => {
  const phoneRegexp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
  const scheme = yup.object().shape({
    number: yup
      .string()
      .trim()
      .matches(phoneRegexp, 'add correct format phone +380ххххххххх')
      .required(),
    name: yup.string().min(3).max(40).required(),
  });
  const initialValues = {
    number: '',
    name: '',
  };
  const onSubmit = (value, { resetForm }) => {
    const { name, number } = value;
    props.onAddContact(name, number);
    resetForm();
  };
  return (
    <>
      <h1>Phone Book</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={scheme}
        onSubmit={onSubmit}
      >
        <StyledForm>
          <Label>Name</Label>
          <Field type="text" name="name" />
          <ErrorMessage component={InvalidValue} name="name" />
          <Label>Number</Label>
          <Field type="tel" name="number" />
          <ErrorMessage component={InvalidValue} name="number" />
          <Label htmlFor="">
            <button type="submit">Add contact</button>
          </Label>
        </StyledForm>
      </Formik>
    </>
  );
};
ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
