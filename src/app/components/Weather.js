import React from "react";
import {Provider, connect} from "react-redux";

import { getWeather } from "../actions/weatherActions";

class Weather extends React.Component {
	constructor() {
		super();
	}
	
    render() {
	    return (
		    <section className="weather grid-x">
		    	<section className="small-12">
			    	<h1>Weather Report</h1>
			    	<button onClick={() => this.props.getWeather("weather")} className="button">Get Weather</button>
		    	</section>
		    </section>
        )
    }
};

const mapStateToProps = (state) => {
	return {
		settings: state.settings,
		math: state.math,
		weather: state.weather
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getWeather: () => {
			dispatch(getWeather())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);

Weather.propTypes = {
	//initialTheme: React.PropTypes.string
}