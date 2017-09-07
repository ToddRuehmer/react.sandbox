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
		    </section>
        )
    }
};

Home.propTypes = {
	initialTheme: React.PropTypes.string
}