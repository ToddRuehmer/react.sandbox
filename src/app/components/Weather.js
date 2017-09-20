import React from "react";
import {Provider, connect} from "react-redux";

import Temperature from "./Tempurature";
import Location from "./Location";

import { getWeather } from "../actions/weatherActions";

class Weather extends React.Component {
	constructor(props) {
		super();
		props.getWeather();
	}
	
    render() {
	    return (
		    <section className="weather grid-x">
		    	<section className="small-12">
			    	<h1>Weather Report</h1>
			    	{this.props.weather.weather.name && <Location locale={this.props.weather.weather.name} />}
			    	{this.props.weather.weather.main && <Temperature tempurature={this.props.weather.weather.main.temp} />}
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