import {createStore, combineReducers, applyMiddleware} from "redux";
//Redux Logger Import
import { createLogger } from "redux-logger";

import mathReducer from "./reducers/mathReducer";
import settingsReducer from "./reducers/settingsReducer";

export default createStore(combineReducers({
	math: mathReducer,
	settings: settingsReducer
}), {}, applyMiddleware(createLogger()));