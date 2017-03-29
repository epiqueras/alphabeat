import React, { Component, PropTypes } from 'react';

import TabsList from './TabsList';

class Window extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTabForm: false,
    };

    this.closeClickHandler = this.closeClickHandler.bind(this);
    this.letterClickHandler = this.letterClickHandler.bind(this);
    this.doMoveLetterEffect = this.doMoveLetterEffect.bind(this);
    this.handleAddButton = this.handleAddButton.bind(this);
  }

  closeClickHandler() {
    this.props.doToggleModal('');
  }

  letterClickHandler() {
    this.props.doChangeTab('sound');
  }

  doMoveLetterEffect(name, toIndex) {
    const { doMoveEffect, openLetter } = this.props;
    doMoveEffect(openLetter, name, toIndex);
  }

  handleAddButton() {
    this.setState({ newTabForm: true });
    // this.props.doMakeEffect(this.props.openLetter, 'RadioHead');
    // TODO: Create default effect configs
    // TODO: Create new tab form
  }

  render() {
    const { openLetter, openTab, letterConfig, doChangeTab } = this.props;
    return (
      <div className={`modal${openLetter ? ' open' : ''}`}>
        <div className="modal-icons">
          <button className="modal-close" onClick={this.closeClickHandler} />
        </div>
        <div className="tabs">
          <button
            className={`tab${openTab === 'sound' ? ' active' : ''}`}
            onClick={this.letterClickHandler}
          >
            LETTER: {openLetter}
          </button>
          <TabsList
            openTab={openTab}
            letterConfig={letterConfig}
            doChangeTab={doChangeTab}
            doMoveLetterEffect={this.doMoveLetterEffect}
          />
          <button className="tab add-effect" onClick={this.handleAddButton}>+</button>
        </div>
      </div>
    );
  }
}

Window.propTypes = {
  openLetter: PropTypes.string.isRequired,
  letterConfig: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  openTab: PropTypes.string.isRequired,
  doToggleModal: PropTypes.func.isRequired,
  doChangeTab: PropTypes.func.isRequired,
  doMoveEffect: PropTypes.func.isRequired,
  doMakeEffect: PropTypes.func.isRequired,
};

export default Window;
