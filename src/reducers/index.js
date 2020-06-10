
const reducer = (state, action) => {

  if (state === undefined) {
    return {
      loading: false,
      error: false,
      currentWeather: null,
      bigFontToggled: false
    }
  }

  switch(action.type) {

    case 'FETCH_CURRENT_WEATHER_REQUESTED':
      return {
        ...state,
        loading: true,
        error: false
      }

    case 'FETCH_CURRENT_WEATHER_SUCCESS':
      return {
        ...state,
        loading: false,
        currentWeather: action.payload
      }

    case 'FETCH_CURRENT_WEATHER_ERROR':
      return {
        ...state,
        loading: false,
        error: true
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