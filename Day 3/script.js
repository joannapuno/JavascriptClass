// Browser Objects
// Browser Object Model


// Window Object -- you dont need to put the 'window' keyword coz you're already there

// Location Object -- changing your users location in the browser

// Navigator Object -- checking vendor, platform, GEO Location etc(position of a device) eg (weather app user GEO location)
// You NEED the users' permissions to get their GEO location
// navigator.geolocation.getCurrentPosition(argument/function, geoError function); (latitude, longitude, speed, etc)

// function geoError(errorObj) {
//     alert("Something went wrong..")
// }


function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;

    document.write(latitude, longitude);
}


function geoError(errorObj) {
    alert("Something Went Wrong!!!!");
}


// Screen Object -- display client screen info
console.log(screen.height);
console.log(screen.width);
console.log(screen.colorDepth);
console.log(screen.orientation);

// Document Object -- Most used objects in the BOM(browser object model)

document.bgColor = 'pink';


// Feature Detection --- IMPORTANT!!

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success,geoError);
}

// if (typeOf navigator.geolocation !="undefined") {
//     navigator.geolocation.getCurrentPosition(success,geoError);
    
// }

// Document Object Model --- DOM




