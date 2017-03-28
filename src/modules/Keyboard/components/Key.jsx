import React, { PropTypes } from 'react';

const Key = ({ letter, doToggleModal }) => {
  function keyClickHandler() {
    doToggleModal(letter);
  }

  return (
    <button className={`key${letter === 'space' ? ' space' : ''}`} onClick={keyClickHandler}>
      {letter}
    </button>
  );
};

Key.propTypes = {
  letter: PropTypes.string.isRequired,
  doToggleModal: PropTypes.func.isRequired,
};

export default Key;
