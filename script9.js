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
try {
    var ajax2 = new XMLHttpRequest();
    var data = {
        username : "ma.banifatemi",
        email : "smabanifatemi78@gmail.com"
    }
    ajax2.open('POST', 'https://jsonplaceholder.typicode.com/users');
    ajax2.setRequestHeader('Content-type', "application/json; charset=UTF-8");
    ajax2.addEventListener('load', function () {
        if (this.readyState === XMLHttpRequest.DONE) {
            if (this.status === 201) {
                console.log('done');
                var data = JSON.parse(this.responseText);
                console.log(data.username);
                console.log(data.email);
            } else
                console.log(this.status);
        }
    })
    ajax2.send(JSON.stringify(data))
} catch (error) {
    console.log(error)
}
console.log("=========================================================================================================")