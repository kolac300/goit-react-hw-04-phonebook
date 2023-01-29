import PropTypes from 'prop-types';
import React from 'react';

export const Filter = ({ filter, onHandleCHange }) => {
  return (
    <>
      <label>Find contacts by name or phone</label>
      <br />
      <input type="text" value={filter} onChange={onHandleCHange} />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onHandleCHange: PropTypes.func.isRequired,
};
