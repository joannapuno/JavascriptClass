var quotes = [
    '"True humility is not thinking less of yourself; it is thinking of yourself less. -- C.S. Lewis"',

    '"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams. -- Dr. Seuss"',

    '"There can be no tyrants where there are no slaves.-- Jose Rizal"',

    '"I can\'t go back to yesterday - because I was a different person then.-- Lewis Carroll" ',

    '"People are more difficult to work with than machines. And when you break a person, he can\'t be fixed. -- Rick Riordan"'];


// Buttons

var backButton = document.getElementById('backButton');
var nextButton = document.getElementById('nextButton');
var counter = 0;

document.getElementById('quote').innerHTML = quotes[counter];

function nextQuote() {
    if(counter < quotes.length - 1){ 
        counter++;
    } else {
        counter = 0;
    }
    document.getElementById('quote').innerHTML = quotes[counter]; 
    
}

function backQuote() {
    if(counter === 0){ 
        counter = quotes.length - 1;
    } else {
        counter--;
    }
    document.getElementById('quote').innerHTML = quotes[counter];
}

// Buttons --- Events

nextButton.addEventListener('click', nextQuote);
backButton.addEventListener('click', backQuote);


// Timer
setInterval(nextQuote, 1000);
    

// var quoteTimer = setInterval(showQuote, 1000);
// clearInterval(quoteTimer);

// function showQuote() {  
//     if(counter < quotes.length - 1){ 
//         counter++;
//     } else {
//         counter = 0;
//     }
//     document.getElementById('quote').innerHTML = quotes[counter]; 
// }

