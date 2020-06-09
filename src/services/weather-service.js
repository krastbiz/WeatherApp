export default class WeatherService {

  _apiBase = "http://api.openweathermap.org/data/2.5/weather";
  _apiKey = "0ca05c7863bb93ad5e24c1834005d5cc";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    console.log(res);
    const body = await res.json();

    return body;
  }

  getCityWeather = async (name) => {
    const data = await this.getResource(`?q=${name}&appid=${this._apiKey}`);
    return data;
  }

}