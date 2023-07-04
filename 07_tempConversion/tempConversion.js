const convertToCelsius = function(tempature) {
  newTemp = ((tempature - 32) * (5 / 9))
  return Math.round(newTemp * 10) / 10
  
};

const convertToFahrenheit = function(tempature) {
  newTemp = (tempature * (9 / 5) + 32)
  return Math.round(newTemp * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
