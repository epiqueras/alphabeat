import { connect } from 'react-redux';

import { getOpenLetter, getOpenTab } from './modalReducer';
import { toggleModal, changeTab } from './modalActions';

import { getKeys } from '../Keyboard/keyboardReducer';

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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Window);
