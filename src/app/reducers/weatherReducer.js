import axios from "Axios";

const weatherReducer = (state = {
	weather: {},
	apiKey: "",
	lastValues: []
	}, action) => {
		switch (action.type) {
			case "SET_WEATHER":
				var result = action.payload;
				state = {
					...state,
					weather: result,
					lastValues: [...state.lastValues, result.data]
				};
				if(state.weather.main) {
					console.log(state.weather, "weather");
					state.weather.main.temp = parseInt(state.weather.main.temp.toFixed(2));
				}
				return state;
				break;
				
			case "SET_KEY":
				var key = action.payload;
				state = {
					...state,
					key: key
				};
				return state;
				break;
				
			default:
				return state;
		}		
	}
	
	export default weatherReducer;