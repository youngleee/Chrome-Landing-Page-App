const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// OR

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("login-form button");
// Either works but the 2nd one is shorter and cleaner

function handleLoginButtonClick() {
    const username = loginInput.value;
    if (username ==='') {
        alert("Please type in your name!");
    } else if (username.length > 14) {
        alert("your name is too long");
    }
}

loginButton.addEventListener("click",handleLoginButtonClick);