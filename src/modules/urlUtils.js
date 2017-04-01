/* global window */
export default function getUrlParameter(name) {
  const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
  const results = regex.exec(window.location.search);
  return results && decodeURIComponent(results[1]);
}

export function encodeKeys(string) {
  if (!string) return string;
  let encodedString = string;
  encodedString = encodedString.replace(/duration/g, '!d!');
  encodedString = encodedString.replace(/rest/g, '!r!');
  encodedString = encodedString.replace(/sample/g, '!s!');
  encodedString = encodedString.replace(/volume/g, '!v!');
  encodedString = encodedString.replace(/release/g, '!rel!');
  encodedString = encodedString.replace(/attack/g, '!a!');
  encodedString = encodedString.replace(/feedback/g, '!f!');
  encodedString = encodedString.replace(/time/g, '!t!');
  encodedString = encodedString.replace(/mix/g, '!m!');
  encodedString = encodedString.replace(/cutoff/g, '!c!');
  encodedString = encodedString.replace(/gain/g, '!g!');
  encodedString = encodedString.replace(/lowGain/g, '!lg!');
  encodedString = encodedString.replace(/midLowGain/g, '!mlg!');
  encodedString = encodedString.replace(/midHighGain/g, '!mhg!');
  encodedString = encodedString.replace(/highGain/g, '!hg!');
  encodedString = encodedString.replace(/speed/g, '!sp!');
  encodedString = encodedString.replace(/depth/g, '!de!');
  encodedString = encodedString.replace(/threshold/g, '!th!');
  encodedString = encodedString.replace(/knee/g, '!k!');
  encodedString = encodedString.replace(/ratio/g, '!ra!');
  encodedString = encodedString.replace(/frequency/g, '!fr!');
  encodedString = encodedString.replace(/peak/g, '!p!');
  encodedString = encodedString.replace(/pan/g, '!pa!');
  encodedString = encodedString.replace(/decay/g, '!dec!');
  encodedString = encodedString.replace(/distortion/g, '!di!');
  encodedString = encodedString.replace(/effects/g, '!e!');
  return encodedString;
}

export function decodeKeys(string) {
  if (!string) return string;
  let decodedString = string;
  decodedString = decodedString.replace(/!d!/g, 'duration');
  decodedString = decodedString.replace(/!r!/g, 'rest');
  decodedString = decodedString.replace(/!s!/g, 'sample');
  decodedString = decodedString.replace(/!v!/g, 'volume');
  decodedString = decodedString.replace(/!rel!/g, 'release');
  decodedString = decodedString.replace(/!a!/g, 'attack');
  decodedString = decodedString.replace(/!f!/g, 'feedback');
  decodedString = decodedString.replace(/!t!/g, 'time');
  decodedString = decodedString.replace(/!m!/g, 'mix');
  decodedString = decodedString.replace(/!c!/g, 'cutoff');
  decodedString = decodedString.replace(/!g!/g, 'gain');
  decodedString = decodedString.replace(/!lg!/g, 'lowGain');
  decodedString = decodedString.replace(/!mlg!/g, 'midLowGain');
  decodedString = decodedString.replace(/!mhg!/g, 'midHighGain');
  decodedString = decodedString.replace(/!hg!/g, 'highGain');
  decodedString = decodedString.replace(/!sp!/g, 'speed');
  decodedString = decodedString.replace(/!de!/g, 'depth');
  decodedString = decodedString.replace(/!th!/g, 'threshold');
  decodedString = decodedString.replace(/!k!/g, 'knee');
  decodedString = decodedString.replace(/!ra!/g, 'ratio');
  decodedString = decodedString.replace(/!fr!/g, 'frequency');
  decodedString = decodedString.replace(/!p!/g, 'peak');
  decodedString = decodedString.replace(/!pa!/g, 'pan');
  decodedString = decodedString.replace(/!dec!/g, 'decay');
  decodedString = decodedString.replace(/!di!/g, 'distortion');
  decodedString = decodedString.replace(/!e!/g, 'effects');
  return decodedString;
}
