class Location {
  constructor(lat, lon) {
    this.lat = lat;
    this.lon = lon;
  }

  createLocation(responseData) {
    return new Location(responseData.lat, responseData.lon);
  }
}

export default Location;