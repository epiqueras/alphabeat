import React, { PropTypes } from 'react';

const Key = ({ letter }) => (
  <button className={`key${letter === ' space' ? letter : ''}`}>
    {letter}
  </button>
);

Key.propTypes = {
  letter: PropTypes.string.isRequired,
};

export default Key;
