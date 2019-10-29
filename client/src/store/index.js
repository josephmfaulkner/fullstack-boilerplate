import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mainSaga from './sagas';
import createRootReducer from "./reducers";


import ReduxPromise from "redux-promise";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';

import { routerMiddleware } from 'connected-react-router';



export const history = createBrowserHistory();
export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(ReduxPromise),
      applyMiddleware(sagaMiddleware),
      applyMiddleware(routerMiddleware(history))
    ),
  );

  sagaMiddleware.run(mainSaga);

  return store
}