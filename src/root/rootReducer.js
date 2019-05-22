import { combineReducers } from "redux";

import { reducerHome } from "../js/Home";
import { reducerResult } from "../js/Result";

export default combineReducers({
  reducerHome,
  reducerResult
});
