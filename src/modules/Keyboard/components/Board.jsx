import React, { PropTypes } from 'react';

import { alphabet } from '../keyboardReducer';

import Key from './Key';

const Board = ({ boardIsOpen, doToggleBoard, doToggleModal }) => { // eslint-disable-line
  function arrowClickHandler() {
    doToggleBoard(!boardIsOpen);
  }

  const keys = alphabet.map(letter => (
    <Key key={letter} letter={letter} doToggleModal={doToggleModal} />
  ));
  return (
    <div className={`keyboard${boardIsOpen ? ' open' : ''}`}>
      <div className="keyboard-details" /><div className="keyboard-details second" />
      <button className="up-arrow" onClick={arrowClickHandler}>&#x25b2;</button>
      <div className="keys">{keys}</div>
    </div>
  );
};

Board.propTypes = {
  boardIsOpen: PropTypes.bool.isRequired,
  doToggleBoard: PropTypes.func.isRequired,
  doToggleModal: PropTypes.func.isRequired,
};

export default Board;
