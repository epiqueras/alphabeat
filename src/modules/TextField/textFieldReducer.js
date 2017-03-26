import { TOGGLE_PLAYING } from './textFieldActions';

const initialState = {
  isPlaying: true,
};

const textFieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PLAYING:
      return { ...state, isPlaying: action.isPlaying };
    default:
      return state;
  }
};

export const getIsPlaying = state => state.textFieldReducer.isPlaying;

export default textFieldReducer;
