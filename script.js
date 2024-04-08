var nameInput = document.getElementById("nameInput");
var humidityPercent = document.getElementById("humidityPercent");
var windSpeed = document.getElementById("windSpeed");
var search = document.getElementById("search");
var placeName= document.getElementById("placeName");
var celsius = document.getElementById("celsius");

search.addEventListener("click",function(){
fetch("weather.json")
.then(response => response.json())
.then(value => {
  const weatherRecord = value.weather.find(weatherObj => weatherObj.place === nameInput.value);
  if (weatherRecord) {
    if(weatherRecord.temperature_C<30 && weatherRecord.humidity_percentage>75&&weatherRecord.wind_speed_kph>10){
        document.getElementById("weatherImage").src="WeatherImage/rainy-day.png";
    }
    else if(weatherRecord.wind_speed_kph>=15){
        document.getElementById("weatherImage").src="WeatherImage/wind.png";
    }
    if(weatherRecord.temperature_C<10 && weatherRecord.humidity_percentage>75&&weatherRecord.wind_speed_kph>10){
        document.getElementById("weatherImage").src="WeatherImage/clouds.png";
    }
    placeName.innerHTML=weatherRecord.place;
    celsius.innerHTML= weatherRecord.temperature_C + "°C";
    windSpeed.innerHTML=weatherRecord.wind_speed_kph + " km/h";
    humidityPercent.innerHTML=weatherRecord.humidity_percentage + "%";
  } else {
    alert("Weather data not found");
  }
});
})
