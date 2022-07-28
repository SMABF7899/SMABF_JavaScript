var myCar = {
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
myCar.name = "Saipa Quick R+"
console.log(myCar)
console.log(myCar["model"])
console.log(myCar.brand)
console.log(myCar.run())
console.log(myCar.summary())

var car_2 = new Object();
car_2.name = "Tara"
console.log(car_2)

var test = function () {
    return "test"
}

console.log(test)
console.log(test())
console.log("=========================================================================================================")
function Car(brand, model, year, speed, color) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.run = function () {
        return "Speed up to " + speed
    }
}

var car3 = new Car("BMW", "Series 7", 2022, 300);
console.log(car3)
console.log(car3 instanceof Object)
console.log("=========================================================================================================")