import { combineReducers } from 'redux';

import keyboardReducer from './modules/Keyboard/keyboardReducer';
import textFieldReducer from './modules/TextField/textFieldReducer';

const rootReducer = combineReducers({
  keyboardReducer,
  textFieldReducer,
});

export default rootReducer;
