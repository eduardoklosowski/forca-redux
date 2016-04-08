import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reduceApp from './reducers';
import App from './components/App';
require('./asserts/style/forca.css');

const store = createStore(reduceApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
