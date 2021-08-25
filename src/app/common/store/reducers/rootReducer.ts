import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";
import { authReducer } from "./authReducer";

export const reducer = combineReducers({
    todosState: todosReducer,
    filterState: filterReducer, 
    authState: authReducer,
  });