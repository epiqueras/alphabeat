import { TOGGLE_BOARD } from './keyboardActions';

const alphabet = 'abcdefghijklmnopqrstuvwyz'.split('');
alphabet.push('space');
export { alphabet };

const initialState = {
  boardIsOpen: true,
  keys: alphabet.reduce((obj, letter) => {
    obj[letter] = {
      duration: 1000,
      rest: 500,
      type: 'sine',
      frequency: 440,
      volume: 1,
      release: 0.4,
      attack: 0.4,
      effects: [],
    };
    return obj;
  }, {}),
};

const keyboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BOARD:
      return { ...state, boardIsOpen: action.isOpen };
    default:
      return state;
  }
};

export const getBoardIsOpen = state => state.keyboardReducer.boardIsOpen;
export const getKeys = state => state.keyboardReducer.keys;

export default keyboardReducer;
