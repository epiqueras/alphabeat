import { combineReducers } from 'redux';

import keyboardReducer from './modules/Keyboard/keyboardReducer';
import textFieldReducer from './modules/TextField/textFieldReducer';
import modalReducer from './modules/Modal/modalReducer';

const rootReducer = combineReducers({
  keyboardReducer,
  textFieldReducer,
  modalReducer,
});

export default rootReducer;
