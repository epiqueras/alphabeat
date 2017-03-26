export default function playSound(sound, time, rest) {
  return new Promise((resolve) => {
    if (sound) sound.play(0, 0);
    setTimeout(() => {
      if (sound) sound.stop();
      if (rest) setTimeout(resolve, rest);
      else resolve();
    }, time);
  });
}
