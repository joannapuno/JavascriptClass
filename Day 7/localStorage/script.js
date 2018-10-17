// Set,get, and remove data

// Setting an Item Option 1 --Can have spaces
localStorage.setItem("username","Joanna");
// OR ---No spaces
localStorage.firstName = "Tyler";


// Getting Data
var name = localStorage.getItem("username");//Joanna
//OR
var name = localStorage.username;
console.log(name);

// Removing Data
localStorage.removeItem("username");
// OR
localStorage.username = null;

localStorage.clear(); //Will remove all keys and data that you have in the local storage

console.log(name.username);

// Greeting
var username = document.getElementById('name').value;
var name = localStorage.setItem("name","username");
if(username){
    
}