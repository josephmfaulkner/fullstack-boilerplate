import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import { connectRouter } from 'connected-react-router'

import Posts from "./Posts";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  Posts
});
export default createRootReducer