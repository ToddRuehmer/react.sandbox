import React from "react";
	    
export class Cell extends React.Component {
	constructor(props) {
		super();
	    this.state = {
		    score: props.initialScore
	    }
	}
	
    increaseScore() {
	    this.setState({
		    score: this.state.score + 1
		});
    }
    
    render() {
	    return (
		    <article className="cell medium-6">
		    	<h2><a href="#">Article Title</a></h2>
			    <p>Score: {this.state.score}</p>	
			    <button onClick={this.increaseScore.bind(this)} className="button">Increase Score</button>
		    </article>
        )
    }
};

Cell.propTypes = {
	initialScore: React.PropTypes.number
}