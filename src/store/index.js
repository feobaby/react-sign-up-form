import { createStore, compose, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from '../reducers/index';

const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ } = window;
const composeEnhancers = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(logger)));
  store.subscribe(() => {
    console.log(store.getState());
  });
  return store;
}


// import { createStore } from 'redux'
// import formApp from '../reducers/signUp.reducer'
// const store = createStore(formApp)

// export default store;

