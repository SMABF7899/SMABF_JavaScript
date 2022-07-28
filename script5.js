'use strict'
try {
    if (true) {
        // throw "An ERROR"
        throw {
            name: "Internal Error",
            message: "Return home page"
        }
    }
} catch (error) {
    console.log(error)
    console.log(error.name, error.message);
} finally {
    console.log("The END")
}
console.log("=========================================================================================================")
console.log("setTimeout()");
// setTimeout(function () {
//     console.log("Hello")
// }, 2000)
console.log("setInterval()")
// var i = 0;
// setInterval(function () {
//     console.log(i);
//     i ++;
// }, 1000)
console.log("=========================================================================================================")
var fullName = "       Seyed Mohammad Ali Bani Fatemi      ";
console.log(fullName.trim());
fullName = fullName.trim();
console.log(fullName.length);
console.log(fullName.charAt(2));
console.log(fullName[2]);
console.log(fullName.concat(" from Iran"));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.split(" "));
console.log(fullName.indexOf("ban"));
console.log(fullName.indexOf("Ban"));
console.log(fullName.substr(0, 5));
console.log(fullName.replace("Ali", "Hassan"));
console.log("=========================================================================================================")