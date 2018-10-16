
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

 // Variables
    var name = document.quiz1['name'].value;
    var age = parseInt(document.quiz1['age'].value);

   

    var animal = document.quiz1['favAnimal'];
    var lifeValue = document.quiz1['important'];
    


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

    if(!lifeValue){
        event.preventDefault();
        errorAnimal.style.display = 'block'
    }

 // Scoring

var birdFeed = 0;
var popStar = 0;
var drugLord = 0;
var donDraper = 0;
var air = 0;
var monk = 0;
var rich = 0;

if(name) {
    birdFeed++;
    popStar++;
    drugLord++;
    donDraper++;
    air++;
    monk++;
    rich++;   
}

if(age < 18) {
    popStar++;
    drugLord++;
    air++;
    birdFeed++;
} 


if(age > 18) {
    donDraper++;
    monk++;
    rich++;
}

// Radio List and Check Boxes

var radioList = document.quiz1['favAnimal'];
for (var i = 0; i < radioList.length; i++){
    if(radioList[i].checked){
        var currentValue1 = (radioList[i].value);
        
        if(currentValue1 =='cat'){
        popStar++;
        air++;
        }
          if(currentValue1 == 'dog'){
              birdFeed++;
              rich++;       
        }
          if(currentValue1 == 'snake'){
            drugLord++;
            air++;
            
        }
          if(currentValue1 == 'pig'){
            birdFeed++;
            air++;
            rich++;
            
        }
          if(currentValue1 == 'sloth'){
            monk++;
            air++;
           
        }
          if(currentValue1 == 'hamster'){
            donDraper++;
            air++;
            popStar++;
            
        }
          if(currentValue1 == 'me'){
            air++;
            rich++;
            drugLord++;
            monk++;     
        }
    }
}

var checkBoxes = document.quiz1['important'];
for (var i = 0; i < checkBoxes.length; i++){
    if(checkBoxes[i].checked){
    var currentValue2 = (checkBoxes[i].value);

      if(currentValue2 == 'money'){
          rich++;
          drugLord++;
          air++; 
    }

      if(currentValue2 == 'family'){
        drugLord++;
        donDraper++; 
    }
      if(currentValue2 == 'career'){
        donDraper++;
        popStar++;
        monk++;
        
    }
      if(currentValue2 == 'wellBeing'){
        monk++;
        birdFeed++;
        air++;
       
    }
      if(currentValue2 == 'earth'){
        air++;
        birdFeed++;
        monk++;
        
    }
      

    }
}


var highestScore = Math.max(popStar,birdFeed,drugLord,donDraper,air,monk,rich);
event.preventDefault();

if(highestScore === popStar && highestScore > 0) {
    document.getElementById('result').innerHTML = "You will be a Popstar!";

} else if (highestScore === donDraper && highestScore > 0) {
    document.getElementById('result').innerHTML = "You will be Don Draper!";

} else if (highestScore === birdFeed && highestScore > 0) {
    document.getElementById('result').innerHTML = "You will be bird feed!";

} else if(highestScore === drugLord && highestScore > 0) {
    document.getElementById('result').innerHTML = "You will be a drug lord!";

} else if(highestScore === air && highestScore > 0){
    document.getElementById('result').innerHTML = "Air, just air...";

} else if (highestScore === monk && highestScore > 0) {
    document.getElementById('result').innerHTML = "You will be a Monk!";

} else if (highestScore === rich && highestScore > 0) {
    document.getElementById('result').innerHTML = "Baby, rich!";
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