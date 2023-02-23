import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormStyled, Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selector';
import Notiflix from 'notiflix';

const ContactForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(6).max(16).required(),
  });

  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);

  const handleSubmit = (contact, { resetForm }) => {
    if (allContacts.some(item => item.name === contact.name)) {
      Notiflix.Notify.info(`Contact ${contact.name} already exist`);
      return;
    }
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" placeholder="Name" />
          <ErrorMessage component="div" name="name" />
        </Label>
        <Label htmlFor="number">
          Number
          <Input type="tel" name="number" placeholder="Number" />
          <ErrorMessage component="div" name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};

export default ContactForm;
