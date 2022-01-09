var txt = "Hello World !"
var txt2 = "Ali !"
var txt3 = "How are you ?"
//alert(txt.charCodeAt(3))
//alert(txt.concat(txt2, txt3, "Why ??").indexOf('Ali'))
//alert(txt.concat(txt2, txt3, "Why ??").lastIndexOf('?', 35))
//alert(txt.replace("Hello", "Bye"))
//alert(txt.slice(0, 3))
var names = "Ali,Ahmad,Hassan,Mohammad"
//alert(names.split(",", 2))
//alert(txt.substr(0, 5))
//alert(txt.toUpperCase())
//alert(txt.anchor("top"))
//alert(txt.big())
//alert(txt.bold())
//alert(txt.fixed())
//alert(txt.italics())
//alert(txt.link("https://smabf.ir/"))
//document.write(txt.small())
//document.write(txt.strike())
document.write("Bani ")
//document.write(txt.sub())
document.write(txt.sup())
function employee (name, job, born) {
  this.name = name
  this.job = job
  this.born = born
}

var person1 = new employee("Ahmad Ahmadi", "programmer", 1990)
employee.prototype.salary = null
person1.salary = "200000000"
//alert(person1.salary)

var date = new Date();
//var date = new Date(7777777)
//var date = new Date('2010/01/05')
//var date = new Date(2012, 3, 21, 12, 24, 26, 765)
//alert(date.getDate())
//alert(date.getFullYear())
//alert(date.getMilliseconds())
//alert(date.getMinutes())
//alert(date.getMonth())
//alert(date.getSeconds())
//alert(date.getTime())
//alert(Date.parse('March 21, 2012'))
//date.setTime(-787547848)
//alert(date.toDateString())
//alert(date.toString())
var apple = ["iPhone X", "iPhone XS", "iPhone XS Max", "iPhone XR", "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max"]
var samsung = ["S8", "S8 Plus", "S9", "S9 Plus", "S10 EE", "S10", "S10 Plus", "Note 20"]
var xiaomi = [" Mi A3", "Mi A2", "Mi A2 Lite", "Note 10", "Mi 11 Lite"]
//alert(apple.concat(samsung, xiaomi))
//alert(apple.indexOf("iPhone 11"))
//alert(apple.join(" / "))
// alert(apple.pop())
// alert(apple)
// alert(apple.push("iPhone 11 Pro Max", "iPhone 12", "iPhone 12 mini"))
// alert(apple)
//alert(apple.reverse())
// alert(apple.shift())
// alert(apple)
// alert(apple.unshift("iPad Pro"))
// alert(apple)
// alert(apple.slice(3, 6))
// alert(apple.slice(-4, -2))
// alert(apple.splice(0, 1, "iPhone 12 Pro", "iPhone 12 Pro Max"))
// alert(apple)
//alert(Math.round(2.3))
alert(Math.floor(10 * Math.random()))
alert(Math.floor(2.8))
alert(Math.abs(-2.3))
alert(Math.asin(1))
alert(Math.ceil(2.3))
alert(Math.sqrt(16))
alert(Math.cos(Math.PI))
alert(Math.exp(2))
alert(Math.log(2))
alert(Math.max(2, 23, 43, -1, 18, 126))
alert(Math.min(2, 23, 43, -1, 18, 126))
alert(Math.pow(2, 6))
alert(Math.tan(4))
