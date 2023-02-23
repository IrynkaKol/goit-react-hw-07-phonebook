import React from 'react';

import { List, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selector';
import { deleteContact } from 'redux/contactSlice';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <Button
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </Button>
        </li>
      ))}
    </List>
  );
};

export default ContactList;
