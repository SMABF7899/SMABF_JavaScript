'use strict'
console.log("Test Management");
var number = 313;
var name = "Seyed Mohammad Ali Bani Fatemi";
var isValid = true;
var numbers = [0, 2, 4, "Ali", true];
var phone = {
    brand : "Apple",
    model : "iPhone 13 Pro"
}
console.log(name + " " + number + " " + isValid);
console.log(typeof numbers);
console.log(numbers[2]);
console.log(phone);

function Sum(a, b) {
    return a + b
}

Sum(10, 5);
var c = Sum(5, 2);
console.log(c);
//x = 5;

if (numbers.length == 10) {
    console.log("The length of numbers is " + numbers.length)
} else {
    console.log("The length of numbers is not true")
}

var num = 4;
switch (num) {
    case 1 :
        console.log("شنبه")
        break
    case 2 :
        console.log("یکشنبه")
        break
    case 3 :
        console.log("دوشنبه")
        break
    case 4 :
        console.log("سه شنبه")
        break
    case 5 :
        console.log("چهارشنبه")
        break
    case 6 :
        console.log("پنج شنبه")
        break
    case 7 :
        console.log("جمعه")
        break
    default:
        console.log("خطا در گرفتن روز")
}

switch (true) {
    case (num == 4 || num == 5):
        console.log("Yes")
        break
    default:
        console.log("No")
        break
}

for (let i = 10; i > 0; i--) {
    console.log(i);
}

var a = 100;
while (a > 0) {
    console.log(a);
    a--;
}

var list = [1, 2, 3, 4, 5, 6]
function sum(array) {
    var total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i];
        console.log("total : " + total + " item " + array[i]);
    }
    return total
}
console.log(sum(list))

list.push(6)
list.push(9)  //add right

list.pop()   //remove right
list.pop()
list.pop()

console.log(list.shift())  // remove left

console.log(list.unshift(3)) // add left

console.log(list.indexOf(4))
console.log(list[list.indexOf(4)])

console.log(list.splice(2, 3))

console.log(list.slice(2, 5))

console.log(list.join(''))

var list2 = [7, 8, 9]

var newList = list2.concat(list)
console.log(newList.sort())
console.log(newList.reverse())

var filterList = newList.filter(function (item) {
    return item % 2 === 0;
})

var mapList = newList.map(function (item) {
    return item * 2;
})

console.log(mapList)
console.log(list)