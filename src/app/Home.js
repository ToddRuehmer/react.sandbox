import React from "react";

import {Header} from "./Header";

export class Home extends React.Component {
	constructor(props) {
		super();
	    this.state = {
		    theme: "light"
	    }
	}
	
	themeChange(e) {console.log(e.target.value);
		this.setState({
			theme: e.target.value
		});
	}
	
    render() {
	    return (
		    <section className="Home grid-x">
		    	<section className="small-12">
			    	<h1>Home</h1>
		    	</section>
		    	<h4 className="small-12">Settings</h4>
		    	<fieldset className="small-6">
			    	<legend>Theme</legend>
			    	<div className="grid-x grid-margin-x"> 
						<article className="shrink cell">
							<label htmlFor="lighttheme" className="label">
								<input type="radio" id="lighttheme" name="theme" value="light" checked={this.state.theme === 'light'} onChange={this.themeChange.bind(this)} /> Light
							</label>
						</article>
						<article className="shrink cell">
							<label htmlFor="darktheme" className="label">
								<input type="radio" id="darktheme" name="theme" value="dark" checked={this.state.theme === 'dark'} onChange={this.themeChange.bind(this)} /> Dark
							</label>
						</article>
					</div>
		    	</fieldset>
		    </section>
        )
    }
};

Home.propTypes = {
	initialTheme: React.PropTypes.string
}