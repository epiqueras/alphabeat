/* eslint-disable global-require */
import React from 'react';

import Keyboard from '../Keyboard/Keyboard';

let DevTools = () => <span />;

if (process.env.NODE_ENV === 'development') {
  DevTools = require('./DevTools').default;
}

const App = () => (
  <div className="app-root">
    <DevTools />
    <div className="title">Alphabeat</div>
    <Keyboard />
  </div>
);

export default App;
