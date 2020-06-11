import React from 'react';
import Detail from '../detail';

import defaultCloud from '../../assets/atmosphere-default.png';
import cloud from '../../assets/cloud.png';
import drizzle from '../../assets/drizzle.png';
import rain from '../../assets/rain.png';
import snow from '../../assets/snow.png';
import sun from '../../assets/sun.png';
import thunder from '../../assets/thunder.png';
import temperatureImg from '../../assets/temperature.png';

import { toCelsius } from '../../utils/unit-util';
import { getTimezoneTime } from '../../utils/date-util';
import { toTitleCase } from '../../utils/string-util';

const MainInfo = (props) => {

  const { id, city, country, temperature, temperatureFeels, timezone, description, iconUrl } = props.weather;
  
  return (
    <div className="main-info">

      <div className="main-info__top">
        <div className="main-info__img">
          <img src={getMainImg(id)} alt="Weather"/>
        </div>

        <div className="main-info__text">
          <p className="main-info__temperature">{toCelsius(temperature)}<sup className="temp-unit">°</sup></p>
          <p className="main-info__date">Monday, <span className="text-secondary">{getTimezoneTime(new Date(), timezone)}</span></p>
        </div>
      </div>

      <div className="delimiter"></div>

      <div className="main-info__details">

        <Detail renderValue={() => <>Feels like: {toCelsius(temperatureFeels)}<sup className="temp-unit">°</sup> </>}>
          <img src={temperatureImg} alt ="Temperature" />
        </Detail>

        <Detail renderValue={() => toTitleCase(description)}>
          <img src={iconUrl} alt ="Weather" />
        </Detail>

      </div>

      <div className="main-info__location">
        {`${city}, ${country.toUpperCase()}`}
      </div>
    </div>
  )
}

const getMainImg = (weatherId) => {
  switch (true) {
    case weatherId < 300:
      return thunder;

    case weatherId >= 300 && weatherId < 400:
      return drizzle;

    case weatherId >= 500 && weatherId < 600:
      return rain;

    case weatherId >= 600 && weatherId < 700:
      return snow;

    case weatherId === 800:
      return sun;

    case (weatherId > 800):
      return cloud;

    default:
      return defaultCloud;
  }
}

export default MainInfo;