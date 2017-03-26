import { connect } from 'react-redux';

import { getIsPlaying } from './textFieldReducer';
import { togglePlaying } from './textFieldActions';

import { getKeys } from '../Keyboard/keyboardReducer';

import Input from './components/Input';

function mapStateToProps(state) {
  return {
    isPlaying: getIsPlaying(state),
    keys: getKeys(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doTogglePlaying: isPlaying => dispatch(togglePlaying(isPlaying)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
