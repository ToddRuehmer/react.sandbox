import {createStore, combineReducers, applyMiddleware} from "redux";
//Redux Logger
import { createLogger } from "redux-logger";
//Redux Thunk
import thunk from "redux-thunk";
//Redux Promise
import promise from "redux-promise-middleware";

import mathReducer from "./reducers/mathReducer";
import settingsReducer from "./reducers/settingsReducer";
import weatherReducer from "./reducers/weatherReducer";

export default createStore(combineReducers({
	math: mathReducer,
	settings: settingsReducer,
	weather: weatherReducer
}), {}, applyMiddleware(createLogger(), thunk));