/* eslint-disable global-require */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './reducer';

export default function configureStore(initialState = {}) {
  const enhancers = [];
  const middleware = [];

  if (process.env.NODE_ENV === 'development') {
    const reduxImmutableState = require('redux-immutable-state-invariant').default;
    const reduxUnhandledAction = require('redux-unhandled-action').default;
    middleware.push(reduxImmutableState());
    middleware.push(reduxUnhandledAction(action => (
      // eslint-disable-next-line no-console
      console.error(`${action} didn't lead to creation of a new state object`)
    )));
  }

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, initialState, composeWithDevTools(...enhancers));

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
