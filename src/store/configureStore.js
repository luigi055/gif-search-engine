import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';
import * as actions from '../actions/actions';

export const configure = (initialState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  // this will verify authentication everytime the page is refreshed
  // We need to call verifyAuth() almost as soon as our app boots
  // so we can update the state accordingly.
  // We can do that as early as when we're creating our store
  store.dispatch(actions.verifyAuth());
  // Since we're working with the store object directly,
  // we don't need anything fancy like thunks or bindActionCreators to dispatch an object:
  // we can just import it and dispatch it right there.

  return store;
};
