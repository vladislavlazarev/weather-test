$(document).ready(function() {
	
		let city = $('.weather-city'),		
			desc = $('.weather-description'),
			wind = $('.weather-wind'),
			input = $('.js-input'),
			btn = $('.js-btn'), 
			temp = $('.weather-temp');
		


		$.getJSON('http://api.openweathermap.org/data/2.5/weather?id=2172797&APPID=3087f86f00085d84da4ec157eb1baa64', function(result) {
			console.log(result);

			setWeatherData(result);
		});
		function setWeatherData(result) {
			city.text(result.name);
			wind.text(result.wind.speed);
			temp.text(result.main.temp);
			desc.text(result.weather[0].description);
		}

		btn.click(function(){
			$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + input.val() + '&APPID=3087f86f00085d84da4ec157eb1baa64', function(result) {
			console.log(result);
		});
	})
});