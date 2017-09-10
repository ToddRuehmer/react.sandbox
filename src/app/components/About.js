import React from "react";

import {Cell} from "./Cell";

export class About extends React.Component {
    render() {
	    return (
		    <section className="About">
		    	<h1>About</h1>
				<section className={this.props.layout + " grid-x body"}>
					<Cell initialScore={0} />
					<Cell initialScore={0} />
				</section>
		    </section>
        )
    }
};