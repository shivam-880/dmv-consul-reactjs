import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './core/store';
import Root from './views/root/Root';

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.querySelector('#root')
);
