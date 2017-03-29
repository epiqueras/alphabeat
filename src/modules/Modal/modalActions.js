export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const CHANGE_TAB = 'CHANGE_TAB';

export function toggleModal(letter) {
  return {
    type: TOGGLE_MODAL,
    letter,
  };
}

export function changeTab(nextTab) {
  return {
    type: CHANGE_TAB,
    nextTab,
  };
}
