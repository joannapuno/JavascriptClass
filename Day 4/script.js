// animating in JS
// Positioning and Moving Content 
// Example
// var divAdvert = document.getElementById("divAdvert");
// divAdvert.style.position = "absolute";
// divAdvert.style.left = "100px"; // set the left position
// divAdvert.style.top = "100px"; // set the top position


// var square = document.getElementById('div-style');
// square.style.position = 'absolute';
// square.style.left = '100px';
// square.style.top = '100px';

// // Timers

// // setTimeout() --- one shot
// function doThisLater() {
//     alert("Time's Up!");   
// }
// setTimeout(doThisLater, 2000);

// // Stopping a Timer
// function doThisLater() {
//     alert("Time's Up!");
//     document.bgColor = 'lightYellow';
// }
// var timerId = setTimeout(doThisLater, 2000);

// clearTimeout(timerId);

// // setInterval() ---continuous, depending how often you want

// function updateTime() {
//     document.getElementById("output").innerHTML = new Date();
// }

// setInterval(updateTime, 1000);



// Events ---an object that is sent when actions take place on your webpage

// JS creates an event when a user clicks an element
//  element.addEventListener('click, function(event you want to happen));


// Variety of events
// ON CLICK
// var button1 = document.getElementById('myButton1');
// var button2 = document.getElementById('myButton2');

// function greeting() {
//     alert ("How are you?");
// };
// button1.addEventListener('click', greeting);

// // MouseOver

// button2.addEventListener('mouseover', greeting);

// Preventing Defaults in Events
// USE ----> element.preventDefault();
// Example, in forms, by default gets submitted right away, you can have it do something else first before getting submitted.



// button1.addEventListener('click', function(event) {
//     event.preventDefault();
// });


// CurrentTarget

var button1 = document.getElementById('myButton1');

button1.addEventListener('click', function(event) {
    var myBtn = event.currentTarget;

    myBtn.style.backgroundColor = 'red';
    myBtn.innerHTML = "Clicked!";
});

// CurrentTarget ---PreventDefault()
var errorSait = document.getElementById('saitLink');

errorSait.addEventListener('click', function(errorEvent){
    var errorMessage = errorEvent.currentTarget;

    errorEvent.preventDefault();
    errorMessage.innerHTML = "Sorry, can't open this!";
})