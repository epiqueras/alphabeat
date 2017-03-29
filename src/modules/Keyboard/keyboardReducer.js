/* eslint-disable no-case-declarations */
import update from 'react/lib/update';

import { TOGGLE_BOARD, MOVE_EFFECT, MAKE_EFFECT } from './keyboardActions';

const alphabet = 'abcdefghijklmnopqrstuvwyz'.split('');
alphabet.push('space');
export { alphabet };

const initialState = {
  boardIsOpen: true,
  keys: alphabet.reduce((obj, letter) => {
    obj[letter] = {
      duration: 1000,
      rest: 500,
      type: 'sawtooth',
      frequency: 440,
      volume: 1,
      release: 0.4,
      attack: 0.4,
      effects: [
        {
          name: 'RingModulator',
          config: {
            speed: 30,
            distortion: 20,
            mix: 0.5,
          },
        },
        {
          name: 'PingPongDelay',
          config: {
            speed: 30,
            distortion: 20,
            mix: 0.5,
          },
        },
      ],
    };
    return obj;
  }, {}),
};

function findEffectHelper(state, action) {
  const effects = state.keys[action.letter].effects;
  const effect = effects.find(soundEffect => soundEffect.name === action.name);
  const fromIndex = effects.indexOf(effect);
  return {
    fromIndex,
    effect,
  };
}

const keyboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BOARD:
      return { ...state, boardIsOpen: action.isOpen };
    case MOVE_EFFECT:
      return {
        ...state,
        keys: {
          ...state.keys,
          [action.letter]: update(state.keys[action.letter], {
            effects: {
              $splice: [
                [findEffectHelper(state, action).fromIndex, 1],
                [action.toIndex, 0, findEffectHelper(state, action).effect],
              ],
            },
          }),
        },
      };
    case MAKE_EFFECT:
      return {
        ...state,
        keys: {
          ...state.keys,
          [action.letter]: {
            ...state.keys[action.letter],
            effects: [...state.keys[action.letter].effects, { name: action.name }],
          },
        },
      };
    default:
      return state;
  }
};

export const getBoardIsOpen = state => state.keyboardReducer.boardIsOpen;
export const getKeys = state => state.keyboardReducer.keys;

export default keyboardReducer;
