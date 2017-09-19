import axios from "Axios";

const weatherReducer = (state = {
	weather: {},
	apiKey: "",
	lastValues: []
	}, action) => {
		switch (action.type) {
			case "GET_WEATHER":
				var keyPromise = axios({
					url:'/app/keys/OpenWeatherAPIKey.json',
					responseType:'json'
				}).then(function(result){
					state = {
						...state,
						apiKey: result.data.key
					}
				});
				keyPromise.then( function(){
					axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=' + state.apiKey)
					.then(function(result) {
						state = {
							...state,
							weather: result.data,
							lastValues: [...state.lastValues, result.data]
						};
					});
				});
				break;
		}
		return state;
	}
	
	export default weatherReducer;