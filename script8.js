'use strict'
try {
    alert("Hello");
    console.log(confirm("Are you ok ?"));
    console.log(prompt("what's your name ?"));
} catch (error) {
    console.log(error);
}
console.log("=========================================================================================================")
// https://developer.mozilla.org/en-US/docs/Web/API/Event
try {
    var title = document.querySelector("#title");
    title.onclick = function () {
        console.log("click");
    }
    title.onmouseenter = function () {
        console.log("click enter");
    }
    title.ondblclick = function () {
        console.log("click 2");
    }
    title.onclick = function (event) {
        event.target.style.backgroundColor = "red";
    }
    title.onmouseenter = function (event) {
        event.target.style.backgroundColor = "green";
    }
    title.onmouseout = function (event) {
        event.target.style.backgroundColor = "blue";
    }
} catch (error) {
    console.log(error);
}