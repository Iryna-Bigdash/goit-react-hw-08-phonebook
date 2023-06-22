import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, removeContact } from 'redux/contacts/operations';
import {
  ContactsContainer,
  ContactsItem,
  ContactsList,
  DeleteContactBtn,
  PhoneContainer,
} from './ContactList.styled';
import { getContacts, getFilter } from 'redux/contacts/selectors';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(removeContact(id));
  };

  const filteredContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    } else {
      return contacts;
    }
  };

  return (
    <ContactsList>
      {filteredContacts().map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactsContainer>{name}:</ContactsContainer>
          <PhoneContainer>{number}</PhoneContainer>
          <DeleteContactBtn onClick={() => handleDeleteContact(id)}>
            Delete
          </DeleteContactBtn>
        </ContactsItem>
      ))}
    </ContactsList>
  );
}
