const repeatString = function(string, num) {
    let newString = "";
    let loopNumber = 0;
    while (loopNumber < num) {
        if (num < 0) {
            break;
        }
        newString += string;
        loopNumber++;
    };
    if (num < 0) {
        return "ERROR";
    }else {
        return newString;
    };
};

// Do not edit below this line
module.exports = repeatString;
