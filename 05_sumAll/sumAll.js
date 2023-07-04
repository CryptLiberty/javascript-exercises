const sumAll = function(int1, int2) {
    let sum = 0
    if (int1 < 0 || int2 < 0) {
        return 'ERROR'
    }
    else if (int1 === int1.toString() || int2 === int2.toString() || Array.isArray(int1) || Array.isArray(int2)) {
        return 'ERROR'
    }
    else if (int1 > int2) {
        sum = int2;
        let loopNumber = int2;
        let addNumber = sum + 1
        while (loopNumber < int1) {
            sum = sum + addNumber;
            addNumber++
            loopNumber++;
        };
    }else if (int1 < int2) {
        sum = int1;
        let loopNumber = int1;
        let addNumber = sum + 1
        while (loopNumber < int2) {
            sum = sum + addNumber;
            addNumber++
            loopNumber++;
        }
    }
    return sum
}

// Do not edit below this line
module.exports = sumAll;
