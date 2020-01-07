const request = require("request");

//Returning weather info for given input of latitude and longitude

const forecast = (latitude, longitude, callback) => {
  const weatherUrl =
    "https://api.darksky.net/forecast/16c76dbed11f350b6b9a6946681648b9/" +
    latitude +
    "," +
    longitude +
    "?units=si";
  request({ url: weatherUrl, json: true }, (error, response) => {
    const data = response.body;
    if (error) {
      callback(
        "Can not connect to the weather service! Please check your connection."
      );
    } else if (data.error) {
      callback("The given location doesn't exist");
    } else {
      callback(
        undefined,
        `It is currently ${Math.round(
          data.currently.temperature
        )} degrees outside. There is ${Math.round(
          data.currently.precipProbability * 100
        )}% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
