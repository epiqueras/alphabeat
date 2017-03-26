export const TOGGLE_BOARD = 'TOGGLE_BOARD';

export function toggleBoard(isOpen) {
  return {
    type: TOGGLE_BOARD,
    isOpen,
  };
}
