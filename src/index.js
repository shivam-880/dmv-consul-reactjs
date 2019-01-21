import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './core/store';
import Home from './views/home/Home';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.querySelector('#root')
);
