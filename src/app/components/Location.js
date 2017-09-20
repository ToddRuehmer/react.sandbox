import React from "react";
	    
export default class Location extends React.Component {
	constructor(props) {
		super();
	    this.state = {
		    locale: props.locale
	    }
	}
    
    render() {
		console.log(this.state, "name");
	    return (
		    <h2 className="location">
		    	{this.state.locale}
		    </h2>
        )
    }
};

Location.propTypes = {
	locale: React.PropTypes.string
}