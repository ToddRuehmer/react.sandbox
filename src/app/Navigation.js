import React from "react";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

export class Navigation extends React.Component {
    render() {
	    return (
		    <nav className="top-bar" data-topbar role="navigation">
				<section className="top-bar-left">
				    <ul className="menu">
				        <li className="menu-text">React.Sandbox</li>
				    </ul>
				</section>
				<section className="top-bar-right">
				    <ul className="menu">
				        <li><NavLink to={"/Home"} activeClassName={"is-active"}>{"Home"}</NavLink></li>
				        <li><NavLink to={"/About"} activeClassName={"is-active"}>{"About"}</NavLink></li>
				        <li><NavLink to={"/Contact"} activeClassName={"is-active"}>{"Contact"}</NavLink></li>
				    </ul>
				</section>
        	</nav>
        )
    }
};