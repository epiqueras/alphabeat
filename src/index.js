/* global document */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store';
import AppRoot from './AppRoot';

const store = configureStore();

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('app'),
  );
}

render(AppRoot);

if (module.hot) {
  module.hot.accept('./AppRoot', () => {
    render(AppRoot);
  });
}
