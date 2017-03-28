import { TOGGLE_MODAL } from './modalActions';

const initialState = {
  openLetter: '',
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, modalIsOpen: action.letter };
    default:
      return state;
  }
};

export const getOpenLetter = state => state.modalReducer.openLetter;

export default modalReducer;
