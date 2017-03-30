export const soundConfig = {
  duration: { min: 1, max: 5000, default: 1000 },
  rest: { min: 1, max: 5000, default: 5000 },
  path: { options: ['sine', 'square', 'triangle', 'sawtooth'], default: 'sine' },
  volume: { min: 0, max: 1, default: 1 },
  release: { min: 0, max: 5, default: 0.4 },
  attack: { min: 0, max: 5, default: 0.4 },
};

export const effectConfigs = {
  Delay: {
    feedback: { min: 0, max: 1, default: 0.5 },
    time: { min: 0, max: 180, default: 0.3 },
    mix: { min: 0, max: 1, default: 0.5 },
  },
  PingPongDelay: {
    feedback: { min: 0, max: 1, default: 0.5 },
    time: { min: 0, max: 180, default: 0.3 },
    mix: { min: 0, max: 1, default: 0.5 },
  },
  DubDelay: {
    feedback: { min: 0, max: 1, default: 0.5 },
    time: { min: 0, max: 180, default: 0.3 },
    cutoff: { min: 0, max: 4000, default: 700 },
    mix: { min: 0, max: 1, default: 0.5 },
  },
  Distortion: {
    gain: { min: 0, max: 1, default: 0.5 },
  },
  Quadrafuzz: {
    lowGain: { min: 0, max: 1, default: 0.6 },
    midLowGain: { min: 0, max: 1, default: 0.8 },
    midHighGain: { min: 0, max: 1, default: 0.5 },
    highGain: { min: 0, max: 1, default: 0.6 },
  },
  Flanger: {
    time: { min: 0, max: 1, default: 0.45 },
    speed: { min: 0, max: 1, default: 0.2 },
    depth: { min: 0, max: 1, default: 0.1 },
    feedback: { min: 0, max: 1, default: 0.1 },
    mix: { min: 0, max: 1, default: 0.5 },
  },
  Compressor: {
    threshold: { min: -100, max: 0, default: -24 },
    knee: { min: 0, max: 40, default: 30 },
    attack: { min: 0, max: 1, default: 0.003 },
    release: { min: 0, max: 1, default: 0.025 },
    ratio: { min: 1, max: 20, default: 12 },
    mix: { min: 0, max: 1, default: 0.5 },
  },
  LowPassFilter: {
    frequency: { min: 10, max: 22050, default: 350 },
    peak: { min: 0.0001, max: 1000, default: 1 },
    mix: { min: 0, max: 1, default: 0.5 },
  },
  HighPassFilter: {
    frequency: { min: 10, max: 22050, default: 350 },
    peak: { min: 0.0001, max: 1000, default: 1 },
    mix: { min: 0, max: 1, default: 0.5 },
  },
  StereoPanner: {
    pan: { min: -1, max: 1, default: 0 },
  },
  Reverb: {
    time: { min: 0.0001, max: 10, default: 0.01 },
    decay: { min: 0, max: 10, default: 0.01 },
    // reverse: false,
    mix: { min: 0, max: 1, default: 0.5 },
  },
  RingModulator: {
    distortion: { min: 0.2, max: 50, default: 1 },
    speed: { min: 0, max: 2000, default: 30 },
    mix: { min: 0, max: 1, default: 0.5 },
  },
  Tremolo: {
    speed: { min: 0, max: 20, default: 4 },
    depth: { min: 0, max: 1, default: 1 },
    mix: { min: 0, max: 1, default: 0.5 },
  },
};
