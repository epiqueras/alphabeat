import { combineReducers } from 'redux';

import keyboardReducer from './modules/Keyboard/keyboardReducer';

const rootReducer = combineReducers({
  keyboardReducer,
});

export default rootReducer;
