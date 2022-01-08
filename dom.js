function change() {
  //document.getElementById("d1").innerHTML = "Hello"
  var para = document.getElementById("d1").getElementsByTagName("p")
  for (var i = 0; i < para.length; i++) {
    para[i].style.color = "red";
    para[i].style.borderWidth = "10px"
    para[i].style.borderStyle = "solid"
    para[i].style.borderColor = "blue"
  }
  document.getElementById("img_1").src = "Picture1.png"
}

function childes() {
  //document.getElementById("d1").childNodes[1].innerHTML = "<a href='https://smabf.ir'>My Web Site</a></br>سایت من"
  //document.getElementById("d1").childNodes[1].style.color = "red"
  //alert(document.getElementById("d1").parentNode.parentNode.firstChild)
  alert(document.getElementById("d1").firstChild.nextSibling.nodeType)
}
