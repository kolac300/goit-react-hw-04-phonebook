import { Li } from './Contact.styled';
import PropTypes from 'prop-types';
import React from 'react';

export const Contact = ({ name, number, onDeleteContact, id }) => {
  return (
    <Li>
      {name}: {number}{' '}
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </Li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
