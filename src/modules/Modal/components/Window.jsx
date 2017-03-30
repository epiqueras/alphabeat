/* eslint-disable */
import React, { Component, PropTypes } from 'react';

import TabsList from './TabsList';
import Settings from './Settings';

import { effectConfigs } from '../../soundConfigs';

class Window extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTabForm: false,
    };

    this.closeClickHandler = this.closeClickHandler.bind(this);
    this.letterClickHandler = this.letterClickHandler.bind(this);
    this.doMoveLetterEffect = this.doMoveLetterEffect.bind(this);
    this.doUpdateLetterSound = this.doUpdateLetterSound.bind(this);
    this.doUpdateLetterEffect = this.doUpdateLetterEffect.bind(this);
    this.doDeleteOpenEffect = this.doDeleteOpenEffect.bind(this);
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleNewEffect = this.handleNewEffect.bind(this);
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

  doUpdateLetterSound(key, value) {
    const { doUpdateSound, openLetter } = this.props;
    doUpdateSound(openLetter, key, value);
  }

  doUpdateLetterEffect(key, value) {
    const { doUpdateEffect, openLetter, openTab } = this.props;
    doUpdateEffect(openLetter, openTab, key, value);
  }

  doDeleteOpenEffect() {
    const { doDeleteEffect, openLetter, openTab } = this.props;
    doDeleteEffect(openLetter, openTab);
    this.letterClickHandler();
  }

  handleAddButton() {
    this.setState({ newTabForm: !this.state.newTabForm });
  }

  handleNewEffect(event) {
    const { doMakeEffect, openLetter } = this.props;
    doMakeEffect(openLetter, event.target.textContent);
  }

  render() {
    const { openLetter, openTab, letterConfig, doChangeTab } = this.props;
    const { newTabForm } = this.state;

    const effectsListItems = letterConfig.effects ? Object.keys(effectConfigs)
      .filter(effectName => !letterConfig.effects.find(effect => effect.name === effectName))
      .map(effectName => <li key={effectName} onClick={this.handleNewEffect}>{effectName}</li>) : '';

    const openConfig = openTab === 'sound' || !openLetter ? letterConfig : letterConfig.effects.find(effect => effect.name === openTab);

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
            KEY: {openLetter}
          </button>
          <TabsList
            openTab={openTab}
            letterConfig={letterConfig}
            doChangeTab={doChangeTab}
            doMoveLetterEffect={this.doMoveLetterEffect}
          />
          {effectsListItems && effectsListItems.length > 0 ?
            <button className="tab add-effect" onClick={this.handleAddButton}>{newTabForm ? '\u25B8' : '+'}</button>
          :
            ''
          }
          {newTabForm ? <ul className="new-tab-list">{effectsListItems}</ul> : ''}
        </div>
        <Settings
          openName={openTab}
          openConfig={openConfig}
          doUpdateLetterSound={this.doUpdateLetterSound}
          doUpdateLetterEffect={this.doUpdateLetterEffect}
          doDeleteOpenEffect={this.doDeleteOpenEffect}
        />
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
  doUpdateSound: PropTypes.func.isRequired,
  doUpdateEffect: PropTypes.func.isRequired,
  doDeleteEffect: PropTypes.func.isRequired,
};

export default Window;
