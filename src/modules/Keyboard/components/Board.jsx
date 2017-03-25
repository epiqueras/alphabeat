import React, { PropTypes } from 'react';

import Key from './Key/Key';

const alphabet = 'abcdefghijklmnopqrstuvwyz'.split('');
alphabet.push('space');

const Board = ({ boardIsOpen, doToggleBoard }) => { // eslint-disable-line
  const keys = alphabet.map(letter => <Key key={letter} letter={letter} />);
  return (
    <div className={`keyboard ${boardIsOpen ? 'open' : ''}`}>
      <button className="up-arrow" onClick={doToggleBoard}>&#x25b2;</button>
      <div className="keys">{keys}</div>
    </div>
  );
};

Board.propTypes = {
  boardIsOpen: PropTypes.bool.isRequired,
  doToggleBoard: PropTypes.func.isRequired,
};

export default Board;
