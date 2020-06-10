const FARENHEIT_UNIT = 273;

const toCelsius = (temp) => {
  return (temp - FARENHEIT_UNIT).toFixed(0);
}

const roundNumber = (number) => {
  return Math.round(number);
}

export {
  toCelsius,
  roundNumber
}