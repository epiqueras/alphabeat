import React, { Component, PropTypes } from 'react';

import { alphabet } from '../keyboardReducer';

import Key from './Key';

class Board extends Component {
  constructor(props) {
    super(props);
    this.arrowClickHandler = this.arrowClickHandler.bind(this);
  }

  arrowClickHandler() {
    const { doToggleBoard, boardIsOpen } = this.props;
    doToggleBoard(!boardIsOpen);
  }

  render() {
    const { doToggleModal, boardIsOpen } = this.props;
    const keys = alphabet.map(letter => (
      <Key key={letter} letter={letter} doToggleModal={doToggleModal} />
    ));
    return (
      <div className={`keyboard${boardIsOpen ? ' open' : ''}`}>
        <div className="keyboard-details" /><div className="keyboard-details second" />
        <button className="up-arrow" onClick={this.arrowClickHandler}>&#x25b2;</button>
        <div className="keys">{keys}</div>
      </div>
    );
  }
}

Board.propTypes = {
  boardIsOpen: PropTypes.bool.isRequired,
  doToggleBoard: PropTypes.func.isRequired,
  doToggleModal: PropTypes.func.isRequired,
};

export default Board;
