const settingsReducer = (state = {
	theme: "light",
	themeClass: "RE-ThemeLight",
	lastValues: []
}, action) => {
	switch (action.type) {
		case "SET_THEME":
			var themeClass = action.payload == "light" ? "RE-ThemeLight" : "RE-ThemeDark";
			state = {
				...state,
				theme: action.payload,
				themeClass: themeClass,
				lastValues: [...state.lastValues, action.payload]
			};
			break;
	}
	return state;
}

export default settingsReducer;