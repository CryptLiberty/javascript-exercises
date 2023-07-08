const add = function(int1, int2) {
  return int1 + int2;
};

const subtract = function(int1, int2) {
	return int1 - int2;
};

const sum = function(array) {
  let newSum = 0
  
    if (array.length < 0 || array === undefined) {
      return 0
    } else if (array.length === 1) {
      return array[0];
    } else {
      for (i in array) {
        newSum += array[i]
      }
      return newSum
    }
};

const multiply = function(...int) {
  let newSum = int[0];
  let addInt = 1
  for (i = 0; i < int.length - 1; i++) {
    newSum = newSum * int[addInt]
    addInt++
  }
  return newSum
};

const power = function(int1, int2) {
	return int1 ** int2;
};

const factorial = function(int1) {
  let sum = int1
  let downNumber = int1
  if (int1 === 0 || int1 === 1){
    return 1;
  } else {
    for (let i = 0; i < int1; i++) {
      if (--downNumber === 0) {
        break;
      } else {
        sum = sum * downNumber;
      }
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
