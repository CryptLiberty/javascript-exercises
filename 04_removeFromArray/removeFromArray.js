const removeFromArray = function(array, ...removal) {
    for (removalSearch of removal) {
        arrayIndexRemoval = array.indexOf(removalSearch)
        if (arrayIndexRemoval === -1){
            continue;
        } else {
            array.splice(arrayIndexRemoval, 1);
        };
        
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
