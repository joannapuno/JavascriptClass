
var submitButton = document.getElementById('submit');

// Error Messages
var errorName = document.getElementById('errorName');
var errorAge = document.getElementById('errorAge');
var errorAnimal = document.getElementById('errorAnimal');
var errorValue = document.getElementById('errorValue');

submitButton.addEventListener('click', function(event){

    // Current Value of Error Messages
    errorName.style.display = 'none';
    errorAge.style.display = 'none';
    errorAnimal.style.display = 'none';
    errorValue.style.display = 'none';

    var name = document.quiz1['name'].value;
    var age = parseInt(document.quiz1['age'].value);

    var animal = document.quiz1['favAnimal'].value;
    var lifeValue = document.querySelectorAll('input[type="checkbox"]');
    var checkedOne = Array.prototype.slice.call(lifeValue).some(x => x.checked);


    // Validation
    if(!name){
        event.preventDefault();
        errorName.style.display = 'block'
    }

    if(!age){
        event.preventDefault();
        errorAge.style.display = 'block'
    }

    if(!animal){
        event.preventDefault();
        errorAnimal.style.display = 'block'
    }

    if(!checkedOne){

        event.preventDefault();
        errorValue.style.display = 'block'
    }
})



// Scoring 0/10
// Bird feed
// A pop star
// a drug lord
// Don Draper
// Air. Just Air.
// A monk
// awful Billionaire

// Name +1
// Age 18below (pop star,drug lord,air,bird feed)
// Age 18+ (don draper,monk,billionaire)

// Cat (pop,dondraper)
// Dog(bird feed, billi)
// Snake(drug lord,air)
// Pig(bird FileReader, air,billioaire)
// Sloth(a monk, air,drug lord)
// Hamster(don drapr,air,pop)
// Me(air,billioaire,druglord,monk)


// Money(billioaire)
// Family(drug lord.don draper)
// Career(don draper,pop StaticRange.monk)
// My wellBeing(monk, birdfeed,air)
// Earth(air,birdfeed,monk)