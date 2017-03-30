/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import Pizzicato from 'pizzicato';

export function playSound(sound, time, rest) {
  return new Promise((resolve) => {
    if (sound) sound.play(0, 0);
    setTimeout(() => {
      if (sound) sound.stop();
      if (rest) setTimeout(resolve, rest);
      else resolve();
    }, time);
  });
}

export function parseKeys(keys) {
  return Object.keys(keys).reduce((obj, letter) => {
    const config = keys[letter];
    obj[letter] = {
      sound: new Pizzicato.Sound({
        source: 'file',
        options: {
          path: require(`../../samples/${config.sample}`),
          volume: config.volume,
          release: config.release,
          attack: config.attack,
        },
      }),
      effects: config.effects.map((effect) => { // eslint-disable-line arrow-body-style
        return { name: effect.name, obj: new Pizzicato.Effects[effect.name](effect.config) };
      }),
    };
    obj[letter].effects.forEach(effect => obj[letter].sound.addEffect(effect.obj));
    return obj;
  }, {});
}

export function updateSounds(keys, sounds) {
  return Object.keys(keys).reduce((soundsObj, letter) => { // Loop over letters.
    const { sound, effects } = soundsObj[letter]; // Get the current sound obj and effects array.
    const newConfig = keys[letter]; // Get the new config.

    // Update sound config.
    sound.path = newConfig.path;
    sound.volume = newConfig.volume;
    sound.release = newConfig.release;
    sound.attack = newConfig.attack;

    // Add and update effects.
    newConfig.effects.forEach((effectConfig) => { // Loop over newConfig effect configs.
      const { name, config } = effectConfig; // Get the name and config obj.
      const effectObj = effects.find(effect => effect.name === name); // Find matching effect.


      if (!effectObj) { // Add effect if not found.
        const newEffect = { name, obj: new Pizzicato.Effects[name](config) };
        sound.addEffect(newEffect.obj);
        effects.push(newEffect); // Push to effects array.
      } else { // Update effect if found.
        // Loop over config keys and overwrite effect keys.
        Object.keys(config).forEach((configKey) => {
          effectObj.obj[configKey] = config[configKey];
        });
      }
    });

    // Get rid of deleted effects.
    effects.forEach((effect) => { // Loop over effects array.
      const { name, obj } = effect; // Get effect name and obj.
      // Remove effect if not found in config.
      if (!newConfig.effects.find(effectConfig => effectConfig.name === name)) {
        sound.removeEffect(obj);
        effects.pop(effect);
      }
    });

    return soundsObj;
  }, sounds);
}
