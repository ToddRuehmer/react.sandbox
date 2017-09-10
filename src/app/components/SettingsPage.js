import React from "react";

import Settings from "./Settings";

export class SettingsPage extends React.Component {
    render() {
	    return (
		    <section className="Contact grid-x">
		    	<h1 className="small-12">Settings</h1>
				<Settings/>
		    </section>
        )
    }
};