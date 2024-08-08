const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// OR

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("login-form button");
// Either works but the 2nd one is shorter and cleaner

function onLoginSubmit() {
    const username = loginInput.value;
    console.log(username);


    // if (username ==='') {
    //     alert("Please type in your name!");
    // } else if (username.length > 14) {
    //     alert("your name is too long");
    // }
};

loginForm.addEventListener("submit", onLoginSubmit);
