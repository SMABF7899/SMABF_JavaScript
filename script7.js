'use strict'
try {
    console.log(typeof document)
    console.log(document.children[0].children)
    console.log(document.body)
    document.body.style.backgroundColor = 'red'
    console.log(document.body.children[0].textContent)
    document.body.children[0].textContent = 'Hello world'
    document.body.children[0].style.color = 'white'
    console.log(document.body.firstElementChild)
    console.log(document.body.firstElementChild.nextElementSibling)
} catch (error) {
    console.log(error)
}
console.log("=========================================================================================================")