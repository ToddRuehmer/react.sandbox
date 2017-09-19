export function getWeather() {
	return {
		type: "GET_WEATHER",
		payload: new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(name);
			}, 2000);
		})
	};
}