import React from 'react';
import sunriseImg from '../../assets/sunrise.png';
import sunsetImg from '../../assets/sunset.png';

import Card from '../card';
import Detail from '../detail';
import { toCelsius, roundNumber } from '../../utils/unit-util';
import { getTime } from '../../utils/date-util';

const DetailInfo = (props) => {

  const { title } = props
  const { temperatureMax,
          temperatureMin,
          cloudiness,
          humidity,
          sunrise, sunset,
          wind,
          visibility } = props.details;

  setTimeout(() => {    
    document.documentElement.style.setProperty('--wind-dir', `${wind.direction}deg`);
  }, 0);

  return (
    <div className="detail-info">
    <div className="detail-info__current">
      <h1 className="detail-info__title">{title}</h1>

      <div className="detail-info-cards-wrapper">
          <div className="detail-info__cards">
                
            <Card title="Temperature">
              <Detail title="Min" renderValue={() => <>{toCelsius(temperatureMin)}<sup>°</sup></>} />
              <Detail title="Max" renderValue={() => <>{toCelsius(temperatureMax)}<sup>°</sup></>} />
            </Card>
            
            <Card title="Wind">
              <Detail renderValue={
                  () => <>
                          <span className="unit-value">{roundNumber(wind.speed)}</span>
                          <span className="unit-type">km/h</span>
                          <div className="direction"></div>
                        </> 
                } />
            </Card>                  

            <Card title="Sunset & Sunrise">
              <Detail renderValue={() => `${getTime(sunrise)}`}>
                <img src={sunriseImg} alt ="Icon Sunrise" />
              </Detail>
              <Detail renderValue={() => `${getTime(sunset)}`}>
                <img src={sunsetImg} alt ="Icon Sunset" />
              </Detail>
            </Card>

            <Card title="Humidity">
              <Detail renderValue={() => <span className="unit-value">{humidity}<sup className="unit-type">%</sup></span>} />
            </Card>

            { visibility 
                ? <Card title="Visibility">
                    <Detail renderValue={() => <><span className="unit-value">{roundNumber(visibility / 1000)}</span><span className="unit-type">km</span></> } />
                  </Card>
                : null
            }
            
                  
            <Card title="Clouds">
              <Detail renderValue={() => <span className="unit-value">{cloudiness}<sup className="unit-type">%</sup></span>}/>
            </Card>

          </div>
        </div>
    </div>

  </div>
  )
}

export default DetailInfo;