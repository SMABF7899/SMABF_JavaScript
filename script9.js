'use strict'
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// https://jsonplaceholder.typicode.com
try {
    var ajax = new XMLHttpRequest();
    console.log(ajax)
    ajax.open('GET', 'https://jsonplaceholder.typicode.com/users');
    ajax.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                console.log('done', this.responseText);
            } else if (this.status === 404) {
                console.log("Users not found!");
            }
        }
    };
    ajax.addEventListener('load', function () {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 200) {
                console.log('done', this.responseText);
            } else if (this.status === 404) {
                console.log("Users not found!");
            }
        }
    });
    ajax.send();
} catch (error) {
    console.log(error);
}
console.log("=========================================================================================================")