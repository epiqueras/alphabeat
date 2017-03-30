import update from 'react/lib/update';

import { TOGGLE_BOARD, MOVE_EFFECT, MAKE_EFFECT, UPDATE_SOUND, UPDATE_EFFECT, DELETE_EFFECT } from './keyboardActions';

import { soundConfig } from '../soundConfigs';

const alphabet = 'abcdefghijklmnopqrstuvwyz'.split('');
alphabet.push('space');
export { alphabet };

const initialState = {
  boardIsOpen: true,
  keys: alphabet.reduce((obj, letter) => {
    obj[letter] = {
      duration: soundConfig.duration.default,
      rest: soundConfig.rest.default,
      path: soundConfig.path.default,
      volume: soundConfig.volume.default,
      release: soundConfig.release.default,
      attack: soundConfig.attack.default,
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
            feedback: 30,
            time: 0.5,
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
            effects: [
              ...state.keys[action.letter].effects, { name: action.name, config: action.config },
            ],
          },
        },
      };
    case UPDATE_SOUND:
      return {
        ...state,
        keys: {
          ...state.keys,
          [action.letter]: {
            ...state.keys[action.letter],
            [action.key]: action.value,
          },
        },
      };
    case UPDATE_EFFECT:
      return {
        ...state,
        keys: {
          ...state.keys,
          [action.letter]: {
            ...state.keys[action.letter],
            effects: state.keys[action.letter].effects.map((effect) => {
              if (effect.name === action.name) {
                return {
                  ...effect,
                  config: { ...effect.config, [action.key]: action.value },
                };
              }
              return effect;
            }),
          },
        },
      };
    case DELETE_EFFECT:
      return {
        ...state,
        keys: {
          ...state.keys,
          [action.letter]: {
            ...state.keys[action.letter],
            effects: state.keys[action.letter].effects
              .filter(effect => effect.name !== action.name),
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
