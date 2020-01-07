const request = require("request");

// Returning latitude and longitude of a place

const geocode = (address, callback) => {
  const geocodeUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoibXltYXAyNSIsImEiOiJjazR6Nml0bnYwN2NoM21xdmJhdGh3dm9sIn0.S1sbjP9fdP3Ui7cWGYBitw&limit=1";

  request({ url: geocodeUrl, json: true }, (error, response) => {
    if (error) {
      callback(
        "Can not connect to the weather service! Please check your connection."
      );
    } else if (response.body.features.length === 0) {
      callback("The given location doesn't exist");
    } else {
      const geoData = response.body.features[0];
      callback(undefined, {
        latitude: geoData.center[1],
        longitude: geoData.center[0],
        location: geoData.place_name
      });
      // weatherInfo(weatherUrl);
    }
  });
};

module.exports = geocode;
