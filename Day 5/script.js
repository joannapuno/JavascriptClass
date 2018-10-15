
// Accessing your forms]



// Forms Collection
var myForm = document.forms;
var myForm = document.forms[0];
var myForm = document.newsletterForm;

// Standard Way
var myForm = document.getElementById('newsletter');
console.log(myForm);

// Accessing NAMES
var email = document.newsletterForm['email'];
var firstName = document.newsletterForm['first name'];
console.log(firstName);

// Accessing VALUES -- you can get the values your users put in
var email = document.newsletterForm.email.value;
var firstName = document.newsletterForm['first name'].value;
// in the browser, you call this to get what the users put in in the browser


// Accessing TYPE[you can loop through specific inputs to use]

var email = document.newsletterForm.email.type;
var firstName = document.newsletterForm['first name'].type;
console.log(email);
console.log(firstName);


// Focus() and Blur()
document.newsletterForm['first name'].focus(); //has the blue outline when page loads
document.newsletterForm['email'].blur(); //not focusing here

// Checkboxes
var checkboxList = document.newsletterForm.feature;

// Looping through which one has been checked
for(var i = 0; i < checkboxList.length;i++) {
    if(checkboxList[i].checked) {
        console.log(checkboxList[i].value);
    }
}


// Submit Buttons

var submitButton = document.newsletterForm.submit;
// submitButton.addEventListener('click', function() {

// //Submit will automatically submit by default, prevent this to be able to show the value first
//     event.preventDefault();   

//     var firstName = document.newsletterForm['first name'].value;
//     var lastName = document.newsletterForm['last name'].value;
//     var email = document.newsletterForm['email'].value;
//     console.log(firstName);
//     console.log(lastName);
//     console.log(email);

// //Giving them a feedback when they click the button
//     if(submitButton){
//         console.log("Thank you for subscribing " + firstName);
//     }
    
// });

// Required Fields




