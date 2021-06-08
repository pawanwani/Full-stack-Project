import { combineReducers } from "redux";
import blogs from "./blogs";
import userState from './users';

export default combineReducers({
  blogs,
  userState
});
