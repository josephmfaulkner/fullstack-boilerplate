import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import mainSaga from './sagas';
import rootReducer from "./reducers";


import ReduxPromise from "redux-promise";

import { composeWithDevTools } from 'redux-devtools-extension';
const sagaMiddleware = createSagaMiddleware();

const rootStore = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(ReduxPromise),
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(mainSaga);

export default rootStore;