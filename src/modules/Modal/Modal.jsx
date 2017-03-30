import { connect } from 'react-redux';

import { getOpenLetter, getOpenTab } from './modalReducer';
import { toggleModal, changeTab } from './modalActions';

import { getKeys } from '../Keyboard/keyboardReducer';
import { moveEffect, makeEffect, updateSound, updateEffect, deleteEffect } from '../Keyboard/keyboardActions';

import Window from './components/Window';

function mapStateToProps(state) {
  const openLetter = getOpenLetter(state);
  return {
    openLetter,
    letterConfig: getKeys(state)[openLetter] || {},
    openTab: getOpenTab(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doToggleModal: letter => dispatch(toggleModal(letter)),
    doChangeTab: nextTab => dispatch(changeTab(nextTab)),
    doMoveEffect: (letter, name, toIndex) => dispatch(moveEffect(letter, name, toIndex)),
    doMakeEffect: (letter, name) => dispatch(makeEffect(letter, name)),
    doUpdateSound: (letter, key, value) => dispatch(updateSound(letter, key, value)),
    doUpdateEffect: (letter, name, key, value) => dispatch(updateEffect(letter, name, key, value)),
    doDeleteEffect: (letter, name) => dispatch(deleteEffect(letter, name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Window);
