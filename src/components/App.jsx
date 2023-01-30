import { ContactList } from './contacts/ContactList';
import { ContactForm } from './phoneBook/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './filter/Filter';
import { ContactsBook } from './App.styled';
import toast, { Toaster } from 'react-hot-toast';
import React, { useState, useEffect } from 'react';

const InitialStickers = () => {
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  return contacts;
};
export const App = () => {
  const [contacts, setContacts] = useState(InitialStickers);
  const [filter, setFilter] = useState('');

  const onHandleCHange = event => {
    setFilter(event.target.value);
  };

  const addContact = (name, number) => {
    if (name.toLowerCase() in isAlredyExistValidation()) {
      toast.error(`${name} is alredy in contacts`);
    } else {
      setContacts(prev => [
        ...prev,
        {
          name: name,
          id: nanoid(),
          number: number,
        },
      ]);
      toast.success('Successfully added!');
    }
  };

  const isAlredyExistValidation = () =>
    contacts.reduce((outputObj, contact) => {
      outputObj[contact.name.toLowerCase()] = contact;
      return outputObj;
    }, {});

  const onDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
    toast.success('Successfully deleted!');
  };

  const onFilter = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <>
      <ContactsBook>
        <Toaster position="top-center" reverseOrder={false} />
        <ContactForm onAddContact={addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onHandleCHange={onHandleCHange} />
        <ContactList
          filtredContacts={onFilter()}
          onDeleteContact={onDeleteContact}
        />
      </ContactsBook>
    </>
  );
};
