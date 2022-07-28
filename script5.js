'use strict'
try {
    if (true) {
        // throw "An ERROR"
        throw {
            name : "Internal Error",
            message : "Return home page"
        }
    }
} catch (error) {
    console.log(error)
    console.log(error.name , error.message);
} finally {
    console.log("The END")
}
console.log("=========================================================================================================")
setTimeout(function () {
    console.log("Hello")
}, 2000)
var i = 0;
// setInterval(function () {
//     console.log(i);
//     i ++;
// }, 1000)
console.log("=========================================================================================================")