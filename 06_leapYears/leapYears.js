const leapYears = function(birthYear) {
    if (birthYear % 100 == 0 && birthYear % 400 == 0) {
        return false;
    }
    else if (birthYear % 4 == 0 || birthYear % 400 == 0) {
        return true;
    } else {return false;};
};

// Do not edit below this line
module.exports = leapYears;
