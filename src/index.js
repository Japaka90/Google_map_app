import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import markers from './store/reducer'

const store = createStore(
  markers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.dispatch({
//   type: 'ADD_LOCATION',
//   name: 'test2'
// });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
