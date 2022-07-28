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