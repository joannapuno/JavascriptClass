var images = document.getElementsByTagName('img');

var pageBody = document.getElementsByTagName('body')[0];


// Create new image
var newImg = document.createElement('img');

// If browser supports geolocation, make that image a kitten. Otherwise, make it a puppy.
if (Modernizr.geolocation) {
    newImg.src = "http://placekitten.com/200/300";
} else {
    newImg.src = "http://www.placepuppy.net/400/250";
}

// Add the image to the page.
pageBody.appendChild(newImg);

if (history.length > 1) {
    document.bgColor = "LightSalmon";
} else {
    document.bgColor = "LightBlue";
}

var h1 = document.getElementById('mainHeading');

h1.style.color = "MidnightBlue";


// Bonus - Styling the Navigation

var listItems = document.getElementsByTagName("li");
for (var i = 0; i < listItems.length; i++) {
    listItems[i].style.display = "inline";
    listItems[i].style.marginLeft = "10px";
}

document.getElementsByTagName('ul')[0].style.padding = 0;
document.getElementsByTagName('ul')[0].style.textAlign = "center";