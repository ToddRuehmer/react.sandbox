import React from "react";
	    
export default class Tempurature extends React.Component {
	constructor(props) {
		super();
	    this.state = {
		    tempurature: props.tempurature
	    }
	}
    
    render() {
	    return (
		    <span className="temperature">
		    	{this.state.tempurature}&deg;
		    </span>
        )
    }
};