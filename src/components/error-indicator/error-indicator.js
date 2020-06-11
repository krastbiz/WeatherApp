import React from 'react';

import notFoundImg from '../../assets/not-found.png';
import errorImg from '../../assets/error.png';

import './error-indicator.scss';

const ErrorIndicator = (props) => {

  const error = getErrorInfo(props.error ? props.error : {});

  return (
    <div className="error-indicator">
      <img className="error-indicator__img" src={error.img} alt="Not found"/>
      <label className="error-indicator__label">{error.text}</label>
    </div>
  )
}

const getErrorInfo = (error) => {
  switch (error.code) {
    case 404:
      return {
        img: notFoundImg,
        text: "Not Found"
      };

    default:
      return {
        img: errorImg,
        text: "Something has wrong! Try again later."
      };
  }
}

export default ErrorIndicator;