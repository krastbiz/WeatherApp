
const reducer = (state, action) => {

  if (state === undefined) {
    return {
      loading: false,
      error: null,
      currentWeather: null,
      bigFontToggled: false
    }
  }

  switch(action.type) {

    case 'FETCH_CURRENT_WEATHER_REQUESTED':
      return {
        ...state,
        loading: true,
        error: null
      }

    case 'FETCH_CURRENT_WEATHER_SUCCESS':
      return {
        ...state,
        loading: false,
        errro: null,
        currentWeather: action.payload
      }

    case 'FETCH_CURRENT_WEATHER_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case 'BIG_FONT_TOGGLED':
      return {
        ...state,
        bigFontToggled: !state.bigFontToggled
      }

    default:
      return state;
  }
}

export default reducer;