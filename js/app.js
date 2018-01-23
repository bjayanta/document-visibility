var timer;
var counter = 1;

document.querySelector('#timer').addEventListener("click", function() {

    timer = setInterval(function() {
        console.log("Hello World");
        document.querySelector('h1').innerHTML = counter;

        counter++;
    }, 1000);

});

document.addEventListener("visibilitychange", function() {

    if(document.hidden) {
        clearInterval(timer);
    }

    console.log(document.hidden);
    console.log(document.visibilityState);

}, false);
