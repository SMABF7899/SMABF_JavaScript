var myName = "Seyed Mohammad Ali Bani Fatemi";

function changeText() {
  /**/
  var url = "Visit <a href='https://smabf.ir'>My Site</a>";
  document.getElementById("message").innerHTML = url;

  var num1 = 31;
  var num2 = 31.2;
  var num4 = 12e4; //120000
  var num5 = 12e-4; //0.0012

  var bool1 = true;
  var bool2 = false;

  var names = new Array()
  names[0] = "Ali"
  names[1] = "Mohammad"
  names[2] = "Hassan"
  names[3] = "Javad"

  var phones = new Array("iPhone X", "iPhone XS", "iPhone 11", "iPhone 12 Pro")
  var iPhones = ["iPhone X", "iPhone XS", "iPhone 11", "iPhone 12 Pro"]
  var student1 = {firstName : "Seyed Mohammad Ali" , lastName : "Bani Fatemi" , age : 22 , Birthday : "1999/10/10"}
  var student2 = {firstName : "Seyed Ali" , lastName : "Bani Fatemi" , age : 21 , Birthday : "2017/10/10"}
  var student3 = {firstName : "Seyed Mohammad" , lastName : "Bani Fatemi" , age : 4 , Birthday : "2012/10/10"}
  var student4 = {firstName : "Seyed Hassan" , lastName : "Bani Fatemi" , age : 10 , Birthday : "2019/10/10"}

  var students = [student1, student2, student3, student4]

  //alert(student1.firstName + " " + student1.lastName)
  //alert(students[0].firstName + " " + students[1].lastName)
  //alert(student3["firstName"])

  //var nn = null;

  var sum = num1 + num2;
  var remain = num1 % num2;
  ++num4;
  --num2;

  var n3 = num1++;
  //alert(n3)

  var s = 10;
  s %= num1;
  //alert(s)

  var s1 = "Hi";
  var s2 = "Ali";
  var s3 = s1 + " " + s2;
  //alert(s3+10)

  var x = num1 > 50 ? 2 : 3;
  //alert(x)

  var x1 = prompt("Enter number : ")
  if (x1 > 10)
    alert("عددت از ۱۰ بزرگتره")
  else
    alert("عددت از ۱۰ کوچیک تره")
}
