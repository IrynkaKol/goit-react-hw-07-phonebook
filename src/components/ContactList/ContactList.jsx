import React from 'react';
import { List, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectStatusFilter } from 'redux/selector';
import { deleteContact } from 'redux/operations';

const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <List>
      {visibleContacts.map(( contact, id ) => (
        <li key={id}>
          {contact.name}: {contact.phone}
          <Button onClick={() => handleDelete(contact.id)}>Delete</Button>
        </li>
      ))}
    </List>
  );
};

export default ContactList;
