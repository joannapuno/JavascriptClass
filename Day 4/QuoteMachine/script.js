var quotes = [
    'True humility is not thinking less of yourself; it is thinking of yourself less.',

    'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',

    'There can be no tyrants where there are no slaves.',

    'I can\'t go back to yesterday - because I was a different person then.',

    'People are more difficult to work with than machines. And when you break a person, he can\'t be fixed.'];

var quoteAuthor = [
    'C.S. Lewis',
    'Dr. Seuss',
    'Jose Rizal',
    'Lewis Carroll',
    'Rick Riordan'
];


var nextImages = [
    './img/cslewis.jpg',
    './img/drSeuss.jpg',
    './img/joseRizal.jpg',
    './img/lewisCarroll.jpg',
    './img/rickRiordan.jpg'
];

// Buttons

var backButton = document.getElementById('backButton');
var nextButton = document.getElementById('nextButton');


// Variables for Quote + Author + Author Images

var counter = 0;
document.getElementById('quote').innerHTML = quotes[counter];
document.getElementById('quote-author').innerHTML = quoteAuthor[counter];
document.getElementById('main-img').src = nextImages[counter];

// Changing Quotes + Author + Author Images

function nextQuote() {
    if(counter < quotes.length - 1){ 
        counter++;
    } else {
        counter = 0;
    }
    document.getElementById('quote').innerHTML = quotes[counter]; 
    document.getElementById('quote-author').innerHTML = quoteAuthor[counter];
    document.getElementById('main-img').src = nextImages[counter]; 
}

function backQuote() {
    if(counter === 0){ 
        counter = quotes.length - 1;
    } else {
        counter--;
    }
    document.getElementById('quote').innerHTML = quotes[counter];
    document.getElementById('quote-author').innerHTML = quoteAuthor[counter];
    document.getElementById('main-img').src = nextImages[counter];
}

// Buttons --- Events

nextButton.addEventListener('click', nextQuote);
backButton.addEventListener('click', backQuote);

// Quote Timer
setInterval(nextQuote, 3000);






// Animations


var direction = 0;

      function moveQuote() {
        var quoteContent = document.getElementById('quote-content');
        var quoteContainer = document.getElementById('quote-container');
        var currentLeft = parseInt(quoteContent.style.left);
        

        if (currentLeft > quoteContainer.width-quoteContent.width) {
          direction = 0;
          
        }

        if (currentLeft <= 0) {
          direction =+ 1;
          
        }

        if (direction) {
          quoteContent.style.left = (currentLeft - 180) + 'px';
        } else {
          quoteContent.style.left = (currentLeft + 180) + 'px';
        }
      }
      
      setInterval(moveQuote, 3000);


    //   #quote-content {
    //     width: 60%;
    //     position: absolute;
    //     /* right: 130px; */
    //     left: 180px;
    //     /* background: red; */
    //     top: 40px;
    // }

    // #quote-container {
    //     width: 60%;
    //     background: url(./img/yellowPolygon.svg);
    //     background-size: cover;
    //     padding-top: 10px;
    //     position: relative;
    //     left: 500px;
    //     /* background: pink; */
    //     background-repeat:no-repeat; 
    
    //   }