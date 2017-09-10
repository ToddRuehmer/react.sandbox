import React from "react";

import {Main} from "./Main";

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