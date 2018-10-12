var quotes = [
    '"True humility is not thinking less of yourself; it is thinking of yourself less. -- C.S. Lewis"',
    '"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams. -- Dr. Seuss"',
    '"There can be no tyrants where there are no slaves.-- Jose Rizal"',
    '"I can\'t go back to yesterday - because I was a different person then.-- Lewis Carroll" ',
    '"People are more difficult to work with than machines. And when you break a person, he can\'t be fixed. -- Rick Riordan"'];

// function quoteChanger() {
//     for(var i = 0; i < quotes.length; i++) {
//         console.log(quotes[i]);
//     }

// }


var backButton = document.getElementById('backButton');
var nextButton = document.getElementById('nextButton');


document.getElementById('quote').innerHTML = quotes[0];


var singleQuote = "";
var i = 1;
nextButton.addEventListener('click', function(){
if(i < quotes.length) {
    singleQuote+=quotes[i++] + "<br>";
}
document.getElementById('quote').innerHTML = singleQuote;

});




