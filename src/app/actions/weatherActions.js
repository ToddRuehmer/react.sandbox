import axios from "Axios";

export function getWeather() {
	return dispatch => {
			
		//Get API key and dispatch to reducer
		var keyPromise = axios({
			url:'/app/keys/OpenWeatherAPIKey.json',
			responseType:'json'
		}).then(function(result){
			dispatch({
				type: "SET_KEY",
				payload: result.data.key
			});
			
			//Get weather and dispatch to reducer after API key secured
 			var weatherPromise = axios.get('http://api.openweathermap.org/data/2.5/weather?zip=53225&units=imperial&APPID=' + result.data.key)
			.then(function(result) {
				dispatch({
					type: "SET_WEATHER",
					payload: result.data
				});
			});
		});
	};
}