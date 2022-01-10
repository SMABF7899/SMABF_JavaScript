var students = []
var cnt = 0
function addStudent() {
  var firstName = prompt("Enter Your First Name :")
  var lastName = prompt("Enter Your Last Name :")
  var age = prompt("Enter Your Age :")

  students[cnt++] = {firstName: firstName, lastName: lastName, age: age}
}

function showStudents() {
  var table = "<table align='center' border='1' width='300'><tr><th>First Name</th> <th>Last Name</th> <th>Age</th></tr>"
  for (var i = 0; i < students.length; i++) {
    table += "<tr>"
    table += "<td align='center'>" + students[i].firstName + "</td>"
    table += "<td align='center'>" + students[i].lastName + "</td>"
    table += "<td align='center'>" + students[i].age + "</td>"
    table += "</tr>"
  }
  table += "</table>"
  document.getElementById("students").innerHTML = table
}
