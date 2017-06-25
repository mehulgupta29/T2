import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers'
import thunkMiddleWare from 'redux-thunk';

let initialAppState = {
  currentUser: null,
  users: []
};

let finalCreateStore = compose(
  applyMiddleware(thunkMiddleWare)
)(createStore);

export default function configureStore(initialState = initialAppState) {
  return finalCreateStore(reducer, initialState);
}
