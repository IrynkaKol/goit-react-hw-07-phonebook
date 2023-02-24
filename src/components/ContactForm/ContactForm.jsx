import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormStyled, Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';

import Notiflix from 'notiflix';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selector';
import { useState } from 'react';

export const ContactForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(6).max(16).required(),
  });

  const { name, setName } = useState('');
  const { number, setNumber } = useState('');
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const handleChangeName = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.target;
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.curentTarget;
    const allContacts = [...items];
    if (allContacts.some(item => item.name === name)) {
      Notiflix.Notify.info(`Contact ${name} already exist`);
      return;
    } else {
      dispatch(addContact({ name: name, phone: number }));
    }

    form.reset();
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
          <Input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChangeName}
          />
          <ErrorMessage component="div" name="name" />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            placeholder="Number"
            onChange={handleChangeNumber}
          />
          <ErrorMessage component="div" name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};

export default ContactForm;
