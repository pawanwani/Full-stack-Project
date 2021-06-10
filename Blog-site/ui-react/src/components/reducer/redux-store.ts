import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import blogs from "./blogs";
import userState from "./users";
import thunk from "redux-thunk";

const reducers = combineReducers({
  blogs,
  userState,
});

export default createStore(reducers, compose(applyMiddleware(thunk)));
