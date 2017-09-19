import React from "react";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {Header} from "./Header";

import {Home} from "./Home";
import {SettingsPage} from "./SettingsPage";
import {About} from "./About";
import Weather from "./Weather";

export class Main extends React.Component {
    render() {
	    console.log(Weather);
	    return (
		    <section id="main" className="grid-container">
				<Router>
			    	<section className="content-header">
						<Header />
						<Switch>
							<Route exact component={Home} path={"/"} />
							<Route component={Home} path={"/Home"} />
							<Route component={About} path={"/About"} />
							<Route component={SettingsPage} path={"/Settings"} />
							<Route component={Weather} path={"/Weather"} />
						</Switch>
					</section>
				</Router>
			</section>
        )
    }
};