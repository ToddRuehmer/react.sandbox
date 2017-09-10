import React from "react";
import {Provider, connect} from "react-redux";

import {Main} from "./Main";

class Defaultpage extends React.Component {
	constructor(props) {
		super();
	}
	add() {
		this.setState({
			numberValue: this.state.numberValue + 1
		});
	}
	render() {
		return (
			<div className={this.props.settings.themeClass + " container"}>
				<Main title={"Hello World"} layout={"two-column"} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		settings: state.settings,
		math: state.math
	}
}

export default connect(mapStateToProps)(Defaultpage);