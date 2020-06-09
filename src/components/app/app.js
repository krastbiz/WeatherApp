import React from 'react';
import WeatherService from '../../services/weather-service';

import './app.scss';
import mainImg from '../../assets/cloud.png';
import sunriseImg from '../../assets/sunrise.png';
import sunsetImg from '../../assets/sunset.png';
import LoadingSpinner from '../loading-spinner';
import SearchSuggestion from '../search-suggestion';
import NoResults from '../no-results';

import { Autocomplete } from '@material-ui/lab';
import AutocompleteField from '../autocomplete';

function App() {

  // const service = new WeatherService();
  // let promise = service.getCityWeather("Minsk");
  // promise.then((data) => console.log(data)).catch((err) => console.log("error", err));


  return (
    <div className="app">
          <div className="content-outer">

            <div className="content-left">

              <div className="content-nav">

                {/* <div className="search">
                   <label htmlFor="search-input" className="search__icon"></label>
                  <input id="search-input" className="search__input" type="text" placeholder="Search for places..." />
                  
                </div> */}
                <AutocompleteField />

              </div>

              <div className="content-left-info">
                

                <div className="main-info">

                  <div className="main-info__top">
                    <div className="main-info__img">
                      <img src={mainImg} alt=""/>
                    </div>

                    <div className="main-info__text">
                    <p className="main-info__temperature">12<sup className="temp-unit">&#176;</sup></p>
                    <p className="main-info__date">Monday, <span className="text-secondary">16:00</span></p>
                    </div>
                  </div>

                  <div className="delimiter"></div>

                  <div className="main-info__details">
                    <div className="detail">

                      <img src="http://openweathermap.org/img/wn/10d@2x.png" alt ="" />

                      <label class="detail__value">Mostly Cloud</label>
                    </div>
                    <div className="detail">
                      <img src="http://openweathermap.org/img/wn/10d@2x.png" alt ="" />

                      <label class="detail__value">Rain - 17%</label>
                    </div>
                  </div>

                  <div className="main-info__location">
                    Minsk, BY
                  </div>


                </div>

                

              </div>

            </div>

            <div className="content-right">

              <div className="content-nav">
                <button className="toggle-font">Aa</button>
              </div>

              <div className="detail-info">
                <div className="detail-info__current">
                  <h1 className="detail-info__title">Today</h1>

                  <div className="detail-info-cards-wrapper">
                    <div className="detail-info__cards">
                      
                      <div className="card card-main">
                        <div className="card-inner">
                          <h2 className="card__title text-secondary">Temperature</h2>

                          <div className="card__details">
                            <div className="detail">
                              <label className="detail__title">Min</label>
                              <label className="detail__value">24<sup>&#176;</sup></label>
                            </div>
                            <div className="detail">
                              <label className="detail__title">Max</label>
                              <label className="detail__value">30 <sup>&#176;</sup></label>
                            </div>
                          </div>

                        </div>
                      </div>
                      
                      <div className="card card-main">
                        <div className="card-inner">
                          <h2 className="card__title text-secondary">Wind</h2>

                          <div className="card__details">

                            <div className="detail">
                              <label className="detail__value"><span className="unit-value">30</span><span className="unit-type">km/h</span></label>
                            </div>
                          </div>

                        </div>
                      </div>


                      <div className="card card-main">
                        <div className="card-inner">
                          <h2 className="card__title text-secondary">{"Sunset & Sunrise"}</h2>

                          <div className="card__details">
                            <div className="detail">
                              <img src={sunriseImg} alt ="" />
                              <label class="detail__value">6:35 AM</label>
                            </div>
                            <div className="detail">
                              <img src={sunsetImg} alt ="" />
                              <label class="detail__value">7:35 PM</label>
                            </div>
                          </div>

                        </div>
                      </div>


                      <div className="card card-main">
                        <div className="card-inner">
                          <h2 className="card__title text-secondary">Humidity</h2>

                          <div className="card__details">

                            <div className="detail">
                              <label className="detail__value"><span className="unit-value">40<sup className="unit-type">%</sup></span></label>
                            </div>
                          </div>

                        </div>
                      </div>
                      
                      
                      <div className="card card-main">
                        <div className="card-inner">
                          <h2 className="card__title text-secondary">Visibility</h2>

                          <div className="card__details">

                            <div className="detail">
                              <label className="detail__value"><span className="unit-value">10</span><span className="unit-type">km</span></label>
                            </div>
                          </div>

                        </div>
                      </div>


                      <div className="card card-main">
                        <div className="card-inner">
                          <h2 className="card__title text-secondary">Clouds</h2>

                          <div className="card__details">

                            <div className="detail">
                              <label className="detail__value"><span className="unit-value">10<sup className="unit-type">%</sup></span></label>
                            </div>
                          </div>

                        </div>
                      </div>


                    </div>
                  </div>
                </div>

                {/* <div className="detail-info__weekly">
                  <h1 className="detail-info__title">Week</h1>

                  <div className="detail-info__cards">

                    <div className="card card-small">
                      <div className="card-inner">
                        <h2 className="card__title">Mon</h2>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt ="" />
                        <label className="card__text">37<span className="celsius">o</span></label>
                      </div>
                    </div>

                    <div className="card card-small">
                      <div className="card-inner">
                        <h2 className="card__title">Tue</h2>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt ="" />
                        <label className="card__text">32<span className="celsius">o</span></label>
                      </div>
                    </div>

                    <div className="card card-small">
                      <div className="card-inner">
                        <h2 className="card__title">Wed</h2>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt ="" />
                        <label className="card__text">37<span className="celsius">o</span></label>
                      </div>
                    </div>

                    <div className="card card-small">
                      <div className="card-inner">
                        <h2 className="card__title">Thu</h2>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt ="" />
                        <label className="card__text">23</label>
                      </div>
                    </div>

                    <div className="card card-small">
                      <div className="card-inner">
                        <h2 className="card__title">Fri</h2>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt ="" />
                        <label className="card__text">18<span className="celsius">o</span></label>
                      </div>
                    </div>

                    <div className="card card-small">
                      <div className="card-inner">
                        <h2 className="card__title">Sat</h2>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt ="" />
                        <label className="card__text">8<span className="celsius">o</span></label>
                      </div>
                    </div>

                    <div className="card card-small">
                      <div className="card-inner">
                        <h2 className="card__title">Sun</h2>
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt ="" />
                        <label className="card__text">25<span className="celsius">o</span></label>
                      </div>
                    </div>

                  </div>
                </div>
               */}
              </div>

            </div>

            </div>
    </div>
  );
}

export default App;
