import React from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {Cell} from "./Cell";
import {Header} from "./Header";

import {Home} from "./Home";
import {Contact} from "./Contact";
import {About} from "./About";

export class Main extends React.Component {
    render() {
	    return (
		    <section id="main" className="grid-container">
				<Router>
			    	<section className="content-header">
						<Header />
						<Switch>
							<Route exact component={Home} path={"/"} />
							<Route component={Home} path={"/Home"} />
							<Route component={About} path={"/About"} />
							<Route component={Contact} path={"/Contact"} />
						</Switch>
					</section>
				</Router>
				<section className={this.props.layout + " grid-x body"}>
					<Cell initialScore={0} />
					<Cell initialScore={0} />
				</section>
			</section>
        )
    }
};