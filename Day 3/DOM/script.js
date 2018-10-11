var header = document.getElementById('header');
console.log(header);

var listItems = document.getElementsByTagName('li');
console.log(listItems);

document.getElementsByClassName('.nav-item');
console.log(listItems);


document.querySelectorAll('listItems');
console.log(listItems);


var firstItem = document.querySelector('li');
console.log(firstItem);

console.log(listItems[0].classList);


// GetElement VS GetElements
// GetElement ---> will return a SINGLE node
// GetElements ---> will return an array of nodes. You will need to use bracket notation to get the right one

var parGet = document.getElementsByTagName('p')[1];
console.log(parGet);

// DOM Nodes Attributes

// With DOT Notation
var kittenPic1 = document.getElementById('kittenPic1');
kittenPic1.src = 'https://placekitten.com/200/200?random';

var kittenPic2 = document.getElementById('kittenPic2');
kittenPic2.src = 'https://placekitten.com/500/500?random';

var kittenPic3 = document.getElementById('kittenPic3');
kittenPic3.src = 'https://placekitten.com/300/300?random';


// With getAttribute or setAttribute(change the attribute)

kittenPic1.setAttribute('src','https://placekitten.com/500/200?random')


// DOM Nodes: Styles -- You can change css using 'style'
// "-" in CSS is camelCasing in JS!!

var pagePar = document.getElementsByTagName('p')[0];
pagePar.style.paddingTop = '30px';
pagePar.style.color = 'green';

// DOM innerHTML property

pagePar.innerHTML += '.This is an addition to this paragraph!';
var parWarning = document.getElementById('warning');
parWarning.innerHTML += 'WARNING!!!There is a cat under your desk!!!';


// Creating new Nodes
// document.createElement(tagName);
// document.createTextNode(text);
// Element.appendChild(element);


var bodyPar = document.getElementsByTagName('body')[0];
var newContainer = document.createElement('div');
bodyPar.appendChild(newContainer);

var newParagraph = document.createElement('p');
newContainer.appendChild(newParagraph);

var paragraphText = document.createTextNode('This is a new paragraph! Wow!');
newParagraph.appendChild(paragraphText);

console.log(newContainer);
console.log(bodyPar);