/* eslint-disable global-require */
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './rootReducer';

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
    const DevTools = require('./modules/App/DevTools').default;
    enhancers.push(DevTools.instrument());
  }

  enhancers.unshift(applyMiddleware(...middleware));

  const store = createStore(rootReducer, initialState, compose(...enhancers));

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
