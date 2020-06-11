const fromUnixDate = (unixDate) => {
  return new Date(unixDate * 1000);
}

const getTimezoneTime = (localDate, timezone) => {
  const pos = timezone < 0 ? -1 : 1;

  const offset = timezone / 60;
  const hoursOffset = Math.floor(offset / 60) * pos;
  const minutesOffset = offset % 60 * pos;

  const minutes = `${localDate.getUTCMinutes() + minutesOffset}`.padStart(2, "0");
  const hours = `${localDate.getUTCHours() + hoursOffset}`.padStart(2, "0");

  return `${hours}:${minutes}`;
}

const getTime = (date) => {

  const minutes = `${date.getMinutes()}`.padStart(2, "0");

  return `${date.getHours()}:${minutes}`;
}

export { 
  fromUnixDate,
  getTimezoneTime,
  getTime
};