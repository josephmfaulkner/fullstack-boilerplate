import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  browserHistory
} from 'react-router-dom';


import { syncHistoryWithStore } from 'react-router-redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store';

const rootElement = document.getElementById('root');

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <App />
      </ConnectedRouter>
    </Provider>,
     rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();