const removeFromArray = function(array, ...removal) {
    for (removalSearch of removal) {
        arrayIndexRemoval = array.indexOf(removalSearch) // uses .indexOf() to find the location of what we want removed
        if (arrayIndexRemoval === -1){ // if its -1, it means arrayIndexRemoval couldn't find anything. So it skips the loop.
            continue;
        } else {
            array.splice(arrayIndexRemoval, 1); // Splices and removes whatever the arrayIndexRemoval found.
        };
        
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
