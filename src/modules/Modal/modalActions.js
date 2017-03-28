export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export function toggleModal(letter) {
  return {
    type: TOGGLE_MODAL,
    letter,
  };
}
