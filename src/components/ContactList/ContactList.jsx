import React from 'react';
import { List, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectStatusFilter } from 'redux/selector';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase()));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <List>
      {getVisibleContacts().map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <Button onClick={() => handleDelete(id)}>Delete</Button>
        </li>
      ))}
    </List>
  );
}

export default ContactList;
