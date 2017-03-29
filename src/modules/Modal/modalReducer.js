import { TOGGLE_MODAL, CHANGE_TAB } from './modalActions';

const initialState = {
  openLetter: '',
  openTab: 'sound',
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, openLetter: action.letter };
    case CHANGE_TAB:
      return { ...state, openTab: action.nextTab };
    default:
      return state;
  }
};

export const getOpenLetter = state => state.modalReducer.openLetter;
export const getOpenTab = state => state.modalReducer.openTab;

export default modalReducer;
