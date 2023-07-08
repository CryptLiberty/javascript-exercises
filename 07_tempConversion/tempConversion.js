const convertToCelsius = function(tempature) {
  tempature = ((tempature - 32) * (5 / 9))
  return Math.round(tempature * 10) / 10
  
};

const convertToFahrenheit = function(tempature) {
  tempature = (tempature * (9 / 5) + 32)
  return Math.round(tempature * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
