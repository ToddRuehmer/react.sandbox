import React from "react";
import {Provider, connect} from "react-redux";

import { setTheme } from "../actions/settingsActions";

class Settings extends React.Component {
	constructor() {
		super();
	}
	
    render() {
	    return (
		    <section className={"settings small-12 grid-x"}>
		    	<fieldset className="small-6">
			    	<legend>Theme</legend>
			    	<div className="grid-x grid-margin-x"> 
						<article className="shrink cell">
							<label htmlFor="lighttheme" className="label">
								<input type="radio" id="lighttheme" name="theme" value="light" checked={this.props.settings.theme === 'light'} onChange={() => this.props.setTheme("light")} /> Light
							</label>
						</article>
						<article className="shrink cell">
							<label htmlFor="darktheme" className="label">
								<input type="radio" id="darktheme" name="theme" value="dark" checked={this.props.settings.theme === 'dark'} onChange={() => this.props.setTheme("dark")} /> Dark
							</label>
						</article>
					</div>
		    	</fieldset>
		    	<p className="small-6"></p>
		    </section>
        )
    }
};

const mapStateToProps = (state) => {
	return {
		settings: state.settings,
		math: state.math
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setTheme: (theme) => {
			dispatch(setTheme(theme))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

Settings.propTypes = {
	initialTheme: React.PropTypes.string
}