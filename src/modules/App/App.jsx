/* eslint-disable global-require */
import React from 'react';

import TextField from '../TextField/TextField';
import Keyboard from '../Keyboard/Keyboard';
import Modal from '../Modal/Modal';

let DevTools = () => <span />;

if (process.env.NODE_ENV === 'development') {
  DevTools = require('./DevTools').default;
}

const App = () => (
  <div className="app-root">
    <DevTools />
    <TextField />
    <Keyboard />
    <Modal />
  </div>
);

export default App;
