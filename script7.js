'use strict'
try {
    console.log(typeof document);
    console.log(document.children[0].children);
    console.log(document.body);
    document.body.style.backgroundColor = 'red';
    console.log(document.body.children[0].textContent);
    document.body.children[0].textContent = 'Hello world';
    document.body.children[0].style.color = 'white';
    console.log(document.body.firstElementChild);
    console.log(document.body.firstElementChild.nextElementSibling);
} catch (error) {
    console.log(error);
}
console.log("=========================================================================================================")
try {
    console.log(document.getElementsByTagName('li'));
    console.log(document.getElementById("list-group").getElementsByTagName("li"));
    console.log(document.getElementsByClassName("item-group"));
    console.log(document.querySelectorAll('.item-group'));
    console.log(document.querySelector('h2'));
    document.querySelector('h2').style.color = 'green';
    document.querySelectorAll('ul li')[0].style.color = 'green';
    document.querySelectorAll('ul li')[0].style.fontSize = '20px';
    var list = document.querySelectorAll('ul li');
    list.forEach(function (item) {
        item.style.color = 'blue';
    })
} catch (error) {
    console.log(error)
}
console.log("=========================================================================================================")