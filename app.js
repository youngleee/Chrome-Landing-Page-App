const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector('a');
const greeting = document.querySelector("#greeting");

// OR

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("login-form button");
// Either works but the 2nd one is shorter and cleaner

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden"); 
    const username = loginInput.value;
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
    console.log(username);


    // if (username ==='') {
    //     alert("Please type in your name!");
    // } else if (username.length > 14) {
    //     alert("your name is too long");
    // }
};


loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem("username");
console.log(savedUsername);

if (savedUsername === null) {
    // show form
} else {
    // show greeting
}