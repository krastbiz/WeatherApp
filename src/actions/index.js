const currentWeatherRequested = (keyword) => {
  return {
    type: 'FETCH_CURRENT_WEATHER_REQUESTED'
  }
}

const currentWeatherLoaded = (data) => {
  return {
    type: 'FETCH_CURRENT_WEATHER_SUCCESS',
    payload: data
  }
}
const currentWeatherError = (error) => {
  return {
    type: 'FETCH_CURRENT_WEATHER_ERROR',
    payload: error
  }
}

const fetchCityWeather = (weatherService, dispatch) => (city) => {

  dispatch(currentWeatherRequested());
  weatherService.getCityWeather(city)
    .then((data) => dispatch(currentWeatherLoaded(data)))
    .catch((error) => dispatch(currentWeatherError(error)));
  
}

const bigFontToggled = () => {
  return {
    type: 'BIG_FONT_TOGGLED',
  }
}

export {
  currentWeatherError,
  currentWeatherLoaded,
  currentWeatherRequested,
  fetchCityWeather,
  bigFontToggled
}