export const TOGGLE_BOARD = 'TOGGLE_BOARD';
export const MOVE_EFFECT = 'MOVE_EFFECT';
export const MAKE_EFFECT = 'MAKE_EFFECT';

export function toggleBoard(isOpen) {
  return {
    type: TOGGLE_BOARD,
    isOpen,
  };
}

export function moveEffect(letter, name, toIndex) {
  return {
    type: MOVE_EFFECT,
    letter,
    name,
    toIndex,
  };
}

export function makeEffect(letter, name) {
  return {
    type: MAKE_EFFECT,
    letter,
    name,
  };
}
