var submitButton = document.getElementById('submit');
var errorName = document.getElementById('errorName');
var errorAge = document.getElementById('errorAge');


submitButton.addEventListener('click', function(event){
    // So error message will disappear when there are no errors
    errorName.style.display = "none";
    errorAge.style.display = "none";
    errorTooYoung.style.display = "none";

    var name = document.form1.txtName.value;
    var age = parseInt(document.form1.txtAge.value);
    // You can also use number() if you want


    // if user forgot to enter either
    if(!name) {
        event.preventDefault();
        errorName.style.display = 'block';
    }

    if(!age) {
        event.preventDefault();
        errorAge.style.display = 'block';
    } else if(age <= 18) {
        event.preventDefault();
        errorTooYoung.style.display = 'block';
    }

})

