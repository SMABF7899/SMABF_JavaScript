'use strict'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

var date = new Date();
console.log(Date.prototype);
console.log(date);
console.log(date.getTime());
console.log(new Date(date.getTime() + 1000));
console.log(new Date(date.getTime() + (1000 * 60) * 60 * 24 * 7));
console.log(Date.now());
console.log(new Date(new Date(Date.parse("2022/7/30"))))
console.log(new Date(Date.parse("2022/7/30")).getHours());
console.log(new Date(new Date(Date.parse("2022/7/30")).setHours(12)));
console.log(new Date(new Date(Date.parse("2022/7/30")).setHours(48)));
console.log("=========================================================================================================")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log(Math.PI);
console.log(Math.abs(-50));
console.log(Math.floor(2.8));
console.log(Math.random());
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
console.log(getRandomInt(100));
console.log(Math.round(1.4));
console.log(Math.round(1.6));
console.log(Math.pow(3, 7));
console.log("=========================================================================================================")