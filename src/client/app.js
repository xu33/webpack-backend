import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HelloList from './component';
import reducer from './reducer';
let store = createStore(reducer, window.INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <HelloList />
  </Provider>,
  document.getElementById('target')
);
