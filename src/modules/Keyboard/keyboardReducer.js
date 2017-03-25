import { TOGGLE_BOARD } from './components/boardActions';

const initialState = {
  boardIsOpen: true,
};

const keyboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BOARD:
      return { ...state, boardIsOpen: !state.boardIsOpen };
    default:
      return state;
  }
};

export const getBoardIsOpen = state => state.keyboardReducer.boardIsOpen;

export default keyboardReducer;
