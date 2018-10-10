// While Loops

// var nine = 9;
// var multiply = 1;

// while (nine <= 108 && multiply <= 12 ) {
//     console.log("9 x " + multiply + " = " + nine );
//     nine = nine + 9;
//     multiply = multiply + 1;
//     // multiply++; <----this is another way for that ^
// }


// // option 2
// // console.log(counter + " x " + number + " = " + counter*number);

// var number = 1;

// while (number < 13) {
//     var counter = 1;
//     while(counter < 13) {
//         console.log(counter + " x " + number + " = " + counter*number);
//         counter++;
//     }
//     number = number + 1;
// }


// For Loops

// Option 1
// for (var i =1; i < 13; i++) {
//     console.log( "9 x " + i + " = " + 9 * i)
// }

// // Option 2

// for (var i =1; i < 13; i++) {
//     for (var counter = 1; counter <13; counter++){
//         console.log( counter + " x " + i + " = " + 9 * i)
//     }
    
// }


// Loops and Logic

// for (var i = 0; i<=20; i++) {
//     if(i % 2===0) {
//         console.log(i + " is even");
//     }else if(i % 2 !==0) {
//         console.log(i + " is odd");
//     } else {
//         console.log(i);
//     }
// }

// Breaking Loops
for (var i =1; i < 13; i++) {
        console.log( "9 x " + i + " = " + 9 * i);

        if(i === 6) {
            console.log('I hate the number 6');
            break;
        }
        // console.log(9*i);
    }


// Arrays

var myFavFoods =['sushi', 'sinigang','pancit','ampalaya', 'pasta'];
console.log('My favourite foods are ' + myFavFoods);

// Array Length to tell you the items in the array
console.log(myFavFoods.length);

// Accessing the item in the array
var fish = myFavFoods[0];
console.log(fish);
console.log(myFavFoods[2]);

myFavFoods[2] = 'Asparagus';
console.log(myFavFoods);


// Expanding Arrays -- PUSH

var dogs = ['labs', 20, 'poodles','shiba'];
console.log(dogs);
dogs.push('honey');
console.log(dogs);

// Iterating through Arrays

var myFavFoods =['sushi', 'sinigang','pancit','ampalaya', 'pasta'];
for(var i = 0; i < myFavFoods.length; i++) {
    console.log(myFavFoods[i]);
}

// Objects

var recipe = {
    recipeTitle: 'Pancit',
    recipeDescription: 'Filipino dish',
    ingredients: ['chicken stock','onions','garlic','noodles','green beans','carrots','celery','soy sauce','chicken breast','fish sauce'],
    directions: "Soak the vermicelli in water for about 5 minutes or until soft. Brown the pork in the oil with the soy sauce, garlic, and onion. Add the water and bouillon cube to the pork and bring to a low simmer. Add the vegetables and cook for 5-10 minutes. Add the uncooked pancit noodles and soaked vermicelli. Simmer over low heat until the noodles soak up all the broth.",
    rating: 5,
    cookTime: 30,
    letsCook: function() {
        console.log("I'm hungry! Let's cook " + recipe.recipeTitle);
    }
};

console.log(recipe);

// Retrieving Values in your objects--Dot Notation
// Can't do spaces
var recipeCookTime = recipe.cookTime;
var recipeName = recipe.recipeTitle;
console.log(recipeName);
console.log(recipeCookTime);

// Retrieving Values in your objects--Bracket Notation
// Always better to use brackets Notation
var recipeCookTime = recipe['cookTime'];
var recipeName = recipe['recipeTitle'];
console.log(recipeCookTime);
console.log(recipeName);


// Changing Objects -- Adding + Deleting
recipe.rating = 3;
recipe.servings = 10;
recipe.HasPeanuts = false;
delete recipe.cookTime;

console.log(recipe);

var movies = [
    {name:'Black Panther', rating:10},
    {name:'Snow Piercer', rating:10},
    {name:'Star Wars', rating:10}
];

// console.log(movies[2].rating);

for(var i = 0; i <= movies.length; i++) {
    var movieCount = movies[i];
    console.log('I give ' + movieCount.name + ' ' + movieCount.rating + ' stars.');
}

// Objects in functions

function describeRecipe(recipeName) {
    console.log('This recipe is called ' + recipeName.recipeTitle + ', and it serves ' + recipeName.servings + ' people.');
}

// describeRecipe(recipe);  to call


