var car = {
    brand : 'Saipa',
    model : 'Quick',
    year : 2020,
    details : {
        color : ['white', 'black', 'red'],
        wheels : 4
    },
    "price" : 100000000,
    run : function () {
        return "Speed up to 200"
    },
    summary : function () {
        return "car details : " + this.model + " , " + this.year
    }
}
car.name = "Saipa Quick R+"
console.log(car)
console.log(car["model"])
console.log(car.brand)
console.log(car.run())
console.log(car.summary())

var car_2 = new Object();
car_2.name = "Tara"
console.log(car_2)

var test = function () {
    return "test"
}

console.log(test)
console.log(test())
console.log("=========================================================================================================")