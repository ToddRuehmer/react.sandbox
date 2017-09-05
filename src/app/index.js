require("foundation-sites-loader");

import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Route, NavLink, Switch, browserHistory, IndexRoute } from 'react-router-dom'

import {Cell} from "./Cell";
import {Main} from "./Main";

import {Home} from "./Home";
import {Contact} from "./Contact";
import {About} from "./About";

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