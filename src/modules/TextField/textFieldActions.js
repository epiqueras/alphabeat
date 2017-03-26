export const TOGGLE_PLAYING = 'TOGGLE_PLAYING';

export function togglePlaying(isPlaying) {
  return {
    type: TOGGLE_PLAYING,
    isPlaying,
  };
}
