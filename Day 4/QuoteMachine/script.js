var quotes = [
    '"True humility is not thinking less of yourself; it is thinking of yourself less. -- C.S. Lewis"',

    '"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams. -- Dr. Seuss"',

    '"There can be no tyrants where there are no slaves.-- Jose Rizal"',

    '"I can\'t go back to yesterday - because I was a different person then.-- Lewis Carroll" ',

    '"People are more difficult to work with than machines. And when you break a person, he can\'t be fixed. -- Rick Riordan"'];

// Buttons

var backButton = document.getElementById('backButton');
var nextButton = document.getElementById('nextButton');

var authorImg = document.getElementById('img-box');


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

nextButton.addEventListener('click', nextQuote, nextImage);
backButton.addEventListener('click', backQuote);


// Quote Timer
setInterval(nextQuote, 3000);


// Image Changer
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = './img/cslewis.jpg';

imgArray[1] = new Image();
imgArray[1].src = './img/drSeuss.jpg';

imgArray[2] = new Image();
imgArray[2].src = './img/joseRizal.jpg';

imgArray[3] = new Image();
imgArray[3].src = './img/lewisCarroll.jpg';

imgArray[4] = new Image();
imgArray[4].src = './img/rickRiordan.jpg';

function nextImage(){
    var img = document.getElementById('mainImage');

    for(var i = 0; i < imgArray.length;i++){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById('mainImage').src = imgArray[0].src;
                
                break;
            }
            document.getElementById('mainImage').src = imgArray[i+1].src;
            break;
        }
    }
}
// Image Timer
setInterval(nextImage, 3000);






// Animations

// var direction = 0;
// var quoteBox = document.getElementById('quote-box')

//       function slideContent() {
//         var quoteContainer = document.getElementById('quote-content');
//         var currentPosition = parseInt(quoteContainer.style.right);
        

//         if (currentPosition <= 0) {
//           direction =+ 1;
//         }

//         if (currentPosition > window.innerWidth - quoteContainer.width) {
//             direction = 0;
//           }

//         if (direction) {
//           quoteContainer.style.right = (currentPosition - 80) + 'px';
//         } else {
//           quoteContainer.style.right = (currentPosition + 80) + 'px';
//         }
//       }
      
//       setInterval(slideContent, 50);