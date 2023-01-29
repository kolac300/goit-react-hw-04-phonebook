import { Contact } from './contact/Contact';
import { SearchWrapper } from './Contacts.styled';
import PropTypes from 'prop-types';
import React from 'react';

export const ContactList = ({ onDeleteContact, filtredContacts }) => {
  return (
    <>
      <SearchWrapper>
        <ul>
          {filtredContacts.map(contact => (
            <Contact
              onDeleteContact={onDeleteContact}
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))}
        </ul>
      </SearchWrapper>
    </>
  );
};

ContactList.propTypes = {
  filtredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
