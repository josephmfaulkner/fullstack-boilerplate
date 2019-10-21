import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";


import ReduxPromise from "redux-promise";

import { composeWithDevTools } from 'redux-devtools-extension';

const rootStore = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(ReduxPromise)
  ));

export default rootStore;