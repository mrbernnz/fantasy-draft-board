import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import './index.css';
import store from './redux/store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = 'http://api.fantasy.nfl.com/v1/players/';

if (process.env.NODE_ENV !== 'production') {
  localStorage.setItem('debug', 'fantasy draft board:*');
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
