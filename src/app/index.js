//React Import
import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Route, NavLink, Switch, browserHistory, IndexRoute } from 'react-router-dom';
//Redux Import
import { createStore, combineReducers } from "redux";

//Global Import
import {Cell} from "./Cell";
import {Main} from "./Main";

//Component Import
import {Home} from "./Home";
import {Contact} from "./Contact";
import {About} from "./About";

//React Init

const mathReducer = (state = {
	result: 1,
	lastValues: []
}, action) => {
	switch (action.type) {
		case "ADD":
			state = {
				...state,
				result: state.result + action.payload,
				lastValues: [...state.lastValues, action.payload]
			};
			break;
		case "SUBTRACT": 
			state = {
				...state,
				result: state.result - action.payload,
				lastValues: [...state.lastValues, action.payload]
			};
			break;
	}
	return state;
}

const settingsReducer = (state = {
	theme: "light",
	lastValues: []
}, action) => {
	switch (action.type) {
		case "SET_THEME":
			state = {
				...state,
				theme: action.payload,
				lastValues: [...state.lastValues, action.payload]
			};
			break;
	}
	return state;
}

const store = createStore(combineReducers({
	mathReducer,
	settingsReducer
}));

store.subscribe(() => {
	console.log("store updated", store.getState());
});

store.dispatch({
	type: "ADD",
	payload: 100
});

store.dispatch({
	type: "ADD",
	payload: 123
});

store.dispatch({
	type: "SET_THEME",
	payload: "dark"
});

//Module
export class Defaultpage extends React.Component {
	constructor(props) {
		super();
		this.state = {
			numberValue: 0,
			status: 0,
			layout: ""
		};
	}
	add() {
		this.setState({
			numberValue: this.state.numberValue + 1
		});
	}
	render() {
		return (
			<div className="container">
				<Main title={"Hello World"} layout={"two-column"} />
			</div>
		)
	}
}

render(<Defaultpage />, window.document.getElementById('defaultpage'));