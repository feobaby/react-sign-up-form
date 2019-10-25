import { createStore,  applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


import rootReducer from '../reducers/index';

const createStoreWithMiddleware=applyMiddleware(thunkMiddleware)(createStore)


export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  store.subscribe(() => {
    console.log(store.getState());
  });
  return store;
}


// import { createStore } from 'redux'
// import formApp from '../reducers/signUp.reducer'
// const store = createStore(formApp)

// export default store;

