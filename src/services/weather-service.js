import { fromUnixDate } from "../utils/date-util";

export default class WeatherService {

  _apiBase = "http://api.openweathermap.org/data/2.5/weather";
  _apiKey = "0ca05c7863bb93ad5e24c1834005d5cc";
  _imgBaseUrl = "http://openweathermap.org/img/wn";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      return Promise.reject({
        message: `Could not fetch ${url}, received ${res.status}`,
        code: res.status
      });
    }

    const body = await res.json();
    return body;
  }

  getCityWeather = async (name) => {
    const data = await this.getResource(`?q=${name}&appid=${this._apiKey}`);
    return this._transformWeather(data);
  }

  _transformWeather(responseData) {

    return {
      id: responseData.weather[0].id,
      description: responseData.weather[0].description,
      iconUrl: this._getIconUrl(responseData.weather[0].icon),
      temperature: responseData.main.temp,
      temperatureMax: responseData.main.temp_max,
      temperatureMin: responseData.main.temp_min,
      temperatureFeels: responseData.main.feels_like,
      humidity: responseData.main.humidity,
      cloudiness: responseData.clouds.all,
      visibility: responseData.visibility,

      city: responseData.name,
      country: responseData.sys.country,
      timezone: responseData.timezone,

      sunrise: fromUnixDate(responseData.sys.sunrise),
      sunset: fromUnixDate(responseData.sys.sunset),

      wind: this._transformWind(responseData),
      location: this._transformLocation(responseData)
    }

  }

  _transformLocation(responseData) {
    return {
      lat: responseData.coord.lat,
      lon: responseData.coord.lon
    }
  }

  _transformWind(responseData) {
    return {
      speed: responseData.wind.speed,
      direction: responseData.wind.deg
    }
  }

  _getIconUrl(icon) {
    return `${this._imgBaseUrl}/${icon}.png`
  }

}