//Method usered to get users text input

//By using the pop up window prompt() method

// let myName = window.prompt("What is your name?");

// console.log(myName);

//By using the DOM manipulation to get text from the input element

let username;

document.getElementById("btn").onclick = function () {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "My Name Is " + username;
}