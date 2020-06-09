import React from 'react';
import ReactDOM from 'react-dom';

import WeatherService from './services/weather-service';

import App from './components/app'
import { WeatherServiceProvider } from './components/weather-service-context';
import ErrorBoundry from './components/error-boundry';

const weatherService = new WeatherService();

ReactDOM.render(
    <ErrorBoundry>
      <WeatherServiceProvider value={weatherService}>
        <App />
      </WeatherServiceProvider>
    </ErrorBoundry>,
  document.getElementById('root')
);

