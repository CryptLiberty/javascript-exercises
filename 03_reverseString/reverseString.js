
const reverseString = function(userString) {
let newString = "";
let reverseStringNumber = userString.length - 1;
for (let i = 0; i < userString.length; i++) {
    newString = newString + userString[reverseStringNumber];
    reverseStringNumber--
}
return newString
};
// Do not edit below this line
module.exports = reverseString;
