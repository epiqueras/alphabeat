import { connect } from 'react-redux';

import { getOpenLetter } from './modalReducer';

import { getKeys } from '../Keyboard/keyboardReducer';

import Window from './components/Window';

function mapStateToProps(state) {
  return {
    openLetter: getOpenLetter(state),
    keys: getKeys(state),
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Window);
