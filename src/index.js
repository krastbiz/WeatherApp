import React from 'react';
import ReactDOM from 'react-dom';

import WeatherService from './services/weather-service';

import App from './components/app'
import store from './store';
import { WeatherServiceProvider } from './components/weather-service-context';
import ErrorBoundry from './components/error-boundry';
import { Provider } from 'react-redux'

const weatherService = new WeatherService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <WeatherServiceProvider value={weatherService}>
        <App />
      </WeatherServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

