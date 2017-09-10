//React Import
import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Route, NavLink, Switch, browserHistory, IndexRoute } from 'react-router-dom';
import {Provider} from "react-redux";

//Global Import
import {Cell} from "./components/Cell";

//Component Import
import {Home} from "./components/Home";
import {SettingsPage} from "./components/SettingsPage";
import {About} from "./components/About";

//Store Import
import store from "./store";

//Module
import {Defaultpage} from "./components/DefaultPage";

render(
	<Provider store={store}>
		<Defaultpage />
	</Provider>, 
	window.document.getElementById('defaultpage'));