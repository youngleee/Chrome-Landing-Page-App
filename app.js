const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// OR

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("login-form button");
// Either works but the 2nd one is shorter and cleaner

function handleLoginButtonClick() {
    console.log("click");
}

loginButton.addEventListener("click",handleLoginButtonClick);