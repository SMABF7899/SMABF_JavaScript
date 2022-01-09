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
alert(date.toString())
