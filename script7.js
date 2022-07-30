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
    console.log(document.querySelector('ul').classList);
    var list = document.querySelectorAll('ul li');
    list.forEach(function (item) {
        item.style.color = 'blue';
    })
} catch (error) {
    console.log(error)
}
console.log("=========================================================================================================")
try {
    var ul = document.createElement('ul');
    console.log(ul.classList.toggle('list-group-2'));
    console.log(ul.classList.toggle('list-group-2'));
    ul.classList.add('list-group');
    ul.setAttribute('id', 'list-group');
    var li1 = document.createElement('li');
    li1.classList.add('item-group');
    li1.textContent = "Item 1";
    var li2 = document.createElement('li');
    li2.classList.add('item-group');
    li2.textContent = "Item 2";
    console.log(ul, li1, li2);
    ul.appendChild(li1);
    ul.appendChild(li2);
    console.log(ul);
    document.querySelector('h2').after(ul);
    document.querySelector('h2').before(ul);
    document.querySelector('h2').appendChild(ul);
    document.querySelector('.group').appendChild(ul);
    document.querySelector('.group').remove();
    document.querySelector('.group').appendChild(ul);
    document.querySelector('.group').removeChild(ul)
    document.querySelector('.group').appendChild(ul);
    document.querySelector('list-group').parentElement.remove();
} catch (error) {
    console.log(error)
}
console.log("=========================================================================================================")