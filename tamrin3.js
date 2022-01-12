var selectedPerson;
function addPerson(btn) {
  var firstName = document.getElementById("firstName").value
  var lastName = document.getElementById("lastName").value
  if (btn.value === "Add") {
    var person = document.createElement('tr')
    person.onmouseover = function () {this.style.backgroundColor = "pink"}
    person.onmouseout = function () {this.style.backgroundColor = "white"}
    var chkCell = document.createElement('td')
    chkCell.innerHTML = "<input type='checkbox' onclick='chkClick(this)'/>"
    var firstNameCell = document.createElement('td')
    firstNameCell.innerHTML = firstName
    var lastNameCell = document.createElement('td')
    lastNameCell.innerHTML = lastName
    var deleteLink = document.createElement('a')
    deleteLink.innerHTML = "Delete"
    deleteLink.href = "#"
    //deleteLink.onclick = function () {deletePerson(event)}
    //deleteLink.onclick = function () {deletePerson2(this)}
    deleteLink.onclick = function () {deletePerson3(person)}
    var editLink = document.createElement('a')
    editLink.innerHTML = "Edit"
    editLink.href = "#"
    editLink.onclick = function () {editPerson(person)}
    var sep = document.createTextNode(' | ')
    var operationCell = document.createElement('td')
    operationCell.appendChild(deleteLink)
    operationCell.appendChild(sep)
    operationCell.appendChild(editLink)
    person.appendChild(chkCell)
    person.appendChild(firstNameCell)
    person.appendChild(lastNameCell)
    person.appendChild(operationCell)
    document.getElementById("tablePerson").appendChild(person)
  } else {
    selectedPerson.childNodes[1].innerHTML = firstName
    selectedPerson.childNodes[2].innerHTML = lastName
    selectedPerson.style.backgroundColor = "White"
  }
}

function deletePerson(event) {
  var person = event.srcElement.parentNode.parentNode
  document.getElementById("tablePerson").removeChild(person)
}
function deletePerson2(link) {
  var person = link.parentNode.parentNode
  document.getElementById("tablePerson").removeChild(person)
}
function deletePerson3(person) {
  document.getElementById("tablePerson").removeChild(person)
}
function editPerson(person) {
  selectedPerson = person;
  person.style.backgroundColor = "Orange"
  document.getElementById("firstName").value = person.childNodes[1].innerHTML
  document.getElementById("lastName").value = person.childNodes[2].innerHTML
  document.getElementById("btnAdd").value = "Modify"
}
function chkAll_click(chkAll) {
  var table = document.getElementById("tablePerson")
  if (chkAll.checked) {
    for (var i = 1; i < table.childNodes.length; i++) {

    }
  } else {
    for (var j = 1; j < table.childNodes.length; j++) {
      table.childNodes[j].childNodes[0].childNodes[0].checked = ""
    }
  }
}
function chkClick(chk) {
  var table = document.getElementById("tablePerson")
  if (!chk.checked)
    document.getElementById("chkAll").checked = ""
  else {
    for (var i = 1; i < table.childNodes.length; i++) {
      if (table.childNodes[i].childNodes[0].childNodes[0].checked)
        continue
      else
        break
    }
  }
  if (i === table.childNodes.length)
    document.getElementById("chkAll").checked = "checked"
}
function deleteSelected() {
  var table = document.getElementById("tablePerson")
  var boxes = document.getElementsByTagName('input')
  for (var i = 1; i < boxes.length;) {
    if (boxes[i].checked)
      table.removeChild(boxes[i].parentNode.parentNode)
    else
      i++
  }
}
