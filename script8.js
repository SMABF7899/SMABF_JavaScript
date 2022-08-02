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
console.log("=========================================================================================================")
try {
    title.addEventListener('click', function () {
        console.log("Handler 1");
    });
    title.addEventListener('click', function () {
        console.log("Handler 2");
    });
    var el1 = document.querySelector('.el1');
    var el2 = document.querySelector('.el2');
    el1.addEventListener('click', function (event) {
        console.log("Element 1");
    });
    var el2func = function (event) {
        event.stopPropagation();
        console.log("Element 2");
    };
    el2.addEventListener('click', el2func);
    var link = document.getElementById("web");
    link.addEventListener('click', function (event) {
        event.preventDefault();
        console.log("smabf.ir");
    });
    setTimeout(() => {
        el2.removeEventListener('click', el2func)
    }, 2000);
} catch (error) {
    console.log(error);
}
console.log("=========================================================================================================")