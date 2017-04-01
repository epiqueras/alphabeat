/* global window */
export default function getUrlParameter(name) {
  const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
  const results = regex.exec(window.location.search);
  return results && decodeURIComponent(results[1].replace(/\+/g, ' '));
}
