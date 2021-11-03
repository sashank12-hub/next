// Unlike in a single-page application, 
// we will return the initialize store function
//  instead of the store itself.

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

export function initializeStore(initialState = {}) {
 return createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
 )};