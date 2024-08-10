const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

// setInterval has 2 arguments: function, time interval
// setInterval(sayHello, 5000);

setInterval(getClock, 1000);

//setTimeout has 2 arguments: function, after how many milliseconds.
