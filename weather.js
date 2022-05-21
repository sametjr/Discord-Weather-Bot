import fetch from "node-fetch";
import formatter from "./timeFormatter.js";

let weather = {
    appKey: "fbcc38913d008808bb28bfac59a25e79",
    WeatherURL: "https://api.openweathermap.org/data/2.5/weather?lat=39.9207886&lon=32.8540482&appid=fbcc38913d008808bb28bfac59a25e79",
    fetchLocation: async function (location) {
        const tempGeoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=fbcc38913d008808bb28bfac59a25e79`
        const data = await (await fetch(tempGeoURL)).json();

        return [data[0].lat, data[0].lon];
    },
    fetchWeather: async function (loc) {
        const [lat, lon] = await weather.fetchLocation(loc);
        const tempWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fbcc38913d008808bb28bfac59a25e79&lang=tr`;
        const data = await (await fetch(tempWeatherURL)).json();
        console.log(data);

        var desc = data.weather[0].description;
        var degree = data.main.temp;
        var feels_like = data.main.feels_like;
        var minimum_temprature = data.main.temp_min;
        var maximum_temprature = data.main.temp_max;
        var wind_speed = data.wind.speed; 
        var wind_rotation = data.wind.deg;
        var [h, m, s] = formatter(data.sys.sunset);

        return [desc, degree - 273.15, feels_like, minimum_temprature, maximum_temprature, wind_speed, wind_rotation, h, m];
    }
}

export default weather;