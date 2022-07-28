'use strict'
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
function Car(brand, model, year, speed) {
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
console.log(car3.constructor)
console.log(myCar.constructor)

Car.prototype.fun = function () {
    return "fun";
}
console.log(car3.fun())

Car.prototype.details = function (color, wheels) {
    this.color = color;
    this.wheels = wheels;
    return "Color : " + color + "\nWheels : " + wheels
}

console.log(car3.details("red", 4))

Object.prototype.sum = function () {
    return "sum"
}

console.log(car3.sum())
console.log(myCar.sum())

function Person (name) {
    this.name = name;
}

Person.prototype.sum = function () {
    return "sum + 1"
}

var ali = new Person("ali");
console.log(ali.sum())

var list = new Array(1, 2, 3, 4, 5, 6);
console.log(list)
console.log(list.constructor)
console.log(list.sum())
console.log(list.hasOwnProperty('9'))

var iphone = new String("iPhone X");
console.log(iphone.constructor)

var num = new Number(1234);
console.log(num.constructor)

var status = new Boolean(true);
console.log(status.constructor)
console.log("=========================================================================================================")
var car4 = Object.create(null);
console.log(car4)
car3.color = "red";
car4 = Object.create(null);
console.log(car4)
car4.makeHappy = function () {
    return "Happy"
};
var car5 = Object.create(car4);
console.log(car5.makeHappy());
car5.color = "Yellow";
car5.brand = "Ikco";
car5.model = "405 Taxi"
car5.year = 1380
console.log(car5)
console.log(car5.makeHappy())
console.log("=========================================================================================================")
var phone = {
    brand: "Apple",
    model: "iPhone X",
    displayDetails: function (year, price) {
        return "Brand : " + this.brand + " , Model : " + this.model + " , Year : " + year + " , Price : " + price
    }
}
var phone2 = {
    brand : "Apple",
    model : "iPhone 13"
}
function displayDetails(year, price) {
    return "Brand : " + this.brand + " , Model : " + this.model + " , Year : " + year + " , Price : " + price;
}
console.log("apply : " + displayDetails.apply(phone))
console.log("apply : " + displayDetails.apply(phone,[2017, "700$"]))
console.log("call : " + displayDetails.call(phone, 2017, "700$"))
console.log("bind : " + displayDetails.bind(phone, 2017, "700$")())
var p = displayDetails.bind(phone, 2017, "700$");
console.log("bind : " + p())
console.log("apply : " + phone.displayDetails.apply(phone2, [2022, "900$"]))
console.log("call : " + phone.displayDetails.call(phone2, 2022, "900$"))
console.log("bind : " + phone.displayDetails.bind(phone2, 2022, "900$")())
console.log("=========================================================================================================")