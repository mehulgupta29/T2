import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import configureStore from './stores/store';
import {Provider} from 'react-redux';

let initialAppState = {
  currentUser: null,
  users: []
};

let store = configureStore(initialAppState);

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
