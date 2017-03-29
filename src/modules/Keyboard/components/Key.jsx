import React, { Component, PropTypes } from 'react';

class Key extends Component {
  constructor(props) {
    super(props);
    this.keyClickHandler = this.keyClickHandler.bind(this);
  }

  keyClickHandler() {
    const { doToggleModal, letter } = this.props;
    doToggleModal(letter);
  }

  render() {
    const { letter } = this.props;
    return (
      <button className={`key${letter === 'space' ? ' space' : ''}`} onClick={this.keyClickHandler}>
        {letter}
      </button>
    );
  }
}

Key.propTypes = {
  letter: PropTypes.string.isRequired,
  doToggleModal: PropTypes.func.isRequired,
};

export default Key;
