//window.document.getElementById()
//alert(window.innerWidth)
//alert(window.innerHeight)
//alert(document.documentElement.clientWidth)
//alert(document.body.clientWidth)

var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
//alert(w)
var win
function btnOpen_Click() {
  win = window.open("", "", "_blank")
}

function btnClose_Click() {
  win.close()
}

function btnMove_Click() {
  win.moveTo(600, 700)
  win.focus()
}

function btnResize_Click() {
  win.resizeTo(800, 100)
  win.focus()
}

//alert(screen.availHeight)
//alert(window.history.forward())
//alert(window.navigator.appName)
//setInterval(function () {alert()}, 3000)
var myTime = setInterval(function () {timer()}, 1000)
function timer() {
  var date = new Date()
  document.getElementById("timer").innerHTML = date.toLocaleTimeString()
}
var timerState = true
function toggleTimer(btn) {
  if (timerState) {
    clearInterval(myTime)
    btn.value = "Play"
    timerState = false
  } else {
    myTime = setInterval(function () {timer()}, 1000)
    btn.value = "Pause"
    timerState = true
  }
}

var op = setTimeout(function () {alert("SMABF")}, 3000)
clearTimeout(op)
