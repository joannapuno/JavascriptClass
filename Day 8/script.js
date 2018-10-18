// // SCOPES
// // You cant access vars inside functions

// // Block scopes/Lexical Scopes
// // {everything is locked in here} eg if statements
// // Functions scopes


// // LET and CONST
// // Let has scope, gets locked in the block it was defined in

// for(let i =0; i< 10; i++) {
//     console.log(i);
// }
// // console.log(i)//will be undefined

// // let condition = true;
// // if(condition) {
// //     let a = 'Zeta';
// //     console.log(a);
// // }
// // console.log(a);//should be undefined


// // CONST ---values that should NEVER change. Block Scope

// // const LANGUAGES = ['Javascript', 'Ruby','Python','Go'];
// // LANGUAGES = "Javascript";//throws an error
// // LANGUAGES.push('Java');//yes you can!

// const ARR = [1,2,3];
// const OBJ = {id:0, name:'Alpha'};
// // You can modify and push into arrays and objects
// ARR.push(4);
// OBJ.age = 30;
// OBJ.id = 3;

// console.log(ARR);
// console.log(OBJ);


// // Using CONST and LET
// const FUNCS =[];
// for(let i = 0; i < 3; i++) {
//     FUNCS.push(function() {
//         console.log(i);
//     });
// }

// for (let j = 0; j < FUNCS.length; j++) {
//     FUNCS[j]();
// }


// // Arrow Functions

// // Old
// function oldOne() {
//     console.log('Hello!');
// }

// // New ---assigning a variable into a function
// var newOne = () => {
//     console.log('Hello');
// }


// // NEW with LET
// let newOneWithParameters = (a,b) => {
//     return a + b;
// }
// newOneWithParameters(10, 20); //30



// // Making it Shorter
// let newOneWithParameters = (a,b) => a + b //=> a + b is the body, this is what it will do. Will automatically return the result


// //No parameters/Single Parameter
// let double = a => 2 * a
// double(2);//4


// // Arrow Function Steps

// var getMessage = function(name) {
//     return 'Hello' + name + '!';
// }

// //Remove word `function`
// //Place => after the parameters ----> `name` =>
// //if there's only 1 parameter, you can remove ()
// //If there's only 1 expression or code line inside function, remove {}

// const getMessage = name => 'Hello' + name + '!';



//Refactoring Code

// const SUM = (num1, num2) => num1 + num2
// console.log(SUM(2,3));//5

// const FIBONACCI = n => {
//     if (n < 3) {
//         return 1;
//     }
//     return FIBONACCI(n - 1) + FIBONACCI (n -2);
// }

// console.log(FIBONACCI(9));//34

// // Default Parameters
// //One or more parameters in the functions have a value
// //You can modify the default by giving it value when calling it


// const MULTIPLY = (a,b=1) => {
//     if(!a) {
//         console.log('Oops! You forgot a value');
        
//     } else {
//         return a * b;

//     };

// }
// console.log(MULTIPLY());
// console.log(MULTIPLY(5,5));
// console.log(MULTIPLY(3));


// // FOR OF LOOP --- looks directly at the values in the array. good for just going through the array

// let array = [2,3,4,5];
// for(let value of array) {
//     console.log(value);//2,3,4,5
// }

// let names = ['Jem', 'Tyler', 'Long'];
// for(let value of names) {
//     console.log(value);//Jem, Tyler, Long
// }

// // SPREAD/REST Operator ... 



// //REST --Creates the parameters into an array
// let createArray = (...array) => {
//     console.log(array); //the `array' word can be anything.
// }

// createArray(10,20,33,434,1);//[10,20,33,434,1]


// //SPREAD --- seperates an array to single values. 

// let createListFromArray = (...list) => {
//     console.log(list);
// }
// createListFromArray([10,20,33,434,1]);

// // let products = (...array) => (currentProduct, number) = number.reduce =>

// // let products = (x,y,z) => {
// //     let reducedNumbers = createArray(x,y,z);
// //     return reducedNumbers;
// // } 

// // console.log(products(3,4,5));


// // Refactoring ---
// let join = (array1, array2) => array1 =[...array1, ...array2];

// console.log(join([1,2,3],[4,5,6]));


// // Template Literals
// //Before
// const student = {
//     name:'Jem',
//     city: 'calgary'
// }

// //Now
// let message = `Hello ${student.name} from ${student.city}`;


// //Refactor
// const user = {
//     name:'Cody',
//     loginCount: 1,
//     goldstatus:true
// };
// const className = 'container';


// // const html = '<div class="' + className + ' ">' + '<h2>Welcome' + (user.goldStatus ? ' to our gold status member, ':', ') + user.name + '!' + '</h2>' + '<p>Today is ' + new Date() + '</p>' +'<p> You have logged in ' + ++user.loginCount + ' times.</p>' +'</div>';

// // document.getElementById('target').innerHTML = html;


// //Refactored
// const html = `<div class=" ${className}">
// <h2>Welcome ${user.name}! </h2>
// <p> Today is ${new Date()}</p>
// <p> You have logged in ${++user.loginCount} times. </p>
// </div>`
// document.getElementById('target').innerHTML = html;




// //If-Else
// if(zone=='East'){
//     shipping_charge=15.00;
// } else {
//     shipping_charge=10.00;
// }

// //ternary operator
// shipping_charge = (zone=='East') ? 15.00 : 10.00;

// //Unary
// time++

// //Binary
// 2+3
// //Ternary
// ? a:b //conditional



// //Destructuring an Array
const points = [20,30,40];
const[x,y,z] = points;
console.log(x,y,z)//20 30 40

//To ignore just skip the index parameter

// //Destructuring an Object --Needs to match the property name!!


const car = {
    type:'Toyota',
    color:'silver',
    model:2007
}

const {type, color,model} = car;
console.log (type, color,model);


//forEach

const names = ['Jem','Tyler', 'Long'];
//you can access the index and the array as well down here
names.forEach((name, index, array) => {
    console.log(name, index);
})

const trips = [
    {mph: 10, hours:3},
    {mph: 30, hours:2},
    {mph: 25, hours:4},
];

trips.forEach((trip) => {
    console.log(trip.mph * trip.hours);
});


//every --when one is FALSE, all FALSE

const students = [
    { name: 'Jem', present: true },
    { name: 'Je', present: false },
    { name: 'Jm', present: false },
];

const allPresent = students.every(student => student.present);
console.log(allPresent) //false


//some -- if one is atleast true, everything is true
const somePresent = students.some(student => student.present);
console.log(somePresent) //true

//activity

const availableLaptops = [
    { name: 'Macbook', RAM: 8 },
    { name: 'Asus', RAM: 32 },
    { name: 'Lenovo', RAM: 16 },
    { name: 'HP', RAM: 4 }
];

const yes16GB = availableLaptops.every(laptop => laptop.RAM >= 16);
console.log(yes16GB);

const some16GB = availableLaptops.some(laptop => laptop.RAM  >= 16);
console.log(some16GB);

//filter -- create a new array by filtering the original array
const users = [
    { username:'ryan10', active: true },
    { username: 'morgan', active: false }
];

const activeUsers = users.filter(user => user.active);
console.log(activeUsers);



//activity

const groceries = [
    { name: 'bananas', aisle: 'produce', price: 2},
    { name: 'flour', aisle: 'baking', price: 5},
    { name: 'avocados', aisle: 'produce', price: 4},
    { name: 'lettuce', aisle: 'produce', price: 5},
    { name: 'olive oil', aisle: 'baking', price: 10},
    { name: 'shampoo', aisle: 'beauty', price: 12}
];

const produceLessThan5 = groceries.filter(grocery => grocery.aisle ==='produce' && grocery.price < 5);
console.log(produceLessThan5);


//map -create a new array by modifying the original array

const moreNumbers =[1,2,3];
const addedNumbers = moreNumbers.map(number => number + 2);
console.log(addedNumbers);
//Activity

const trips2 = [
    { miles: 5, hours: 1 },
    { miles: 6, hours: 0.5 },
    { miles: 4, hours: 2 }
];

const speeds = trips2.map(trip => trip.miles * trip.hours);
console.log(speeds);

//find --find the FIRST element that passes a test/condition
const posts = [
    { id: 23, title: 'Becoming an Es6 Wizard', body:'Lorem blah' },
    { id: 29, title: 'JavaScript Pro Tips', body:'ww Lorem blah' },
    { id: 31, title: 'Acing your next JS interview', body:'fff Lorem blah' },
];

const currentId = 29;
const currentPost = posts.find(post => post.id ===currentId);

console.log(currentPost.title);
console.log(currentPost.body);
console.log(currentPost);


//findIndex -- find the index of the first element that passes the test/condition
//reduce pass an initialValue, modify it according to the current element value

const addMore = [2,6,10];

const sum = addMore.reduce(function(currentSum, number) {
    return currentSum + number;
}, 0);

console.log(sum);


//activity

const transactions = [5,10,15];
const newSum = transactions.reduce(function(currentSum, transaction) {
    return currentSum + transaction;
}, 0);

const newSum1 = transactions.reduce((currentSum, transaction) => currentSum + transaction,0); //in ES6

console.log(newSum);
console.log(newSum1);


// //Quiz
// // 1.You need to check if all elements in an array are integers.
// every()
// // 2. You have an array of blog posts and need to output each post on the page.
// forEach()
// // 3. You need to check if an array has at least one element that isn't null.
// some()
// // 4. You have an array of expenses and need to calculate your total expenses lastmonth.
// reduce()
// // 5. You need a new array to store the square root of each item in an existing array.
// map()
// // 6. You have an array of computers, but only need computers with more than 16GB of RAM.
// filter()
// // 7. You have an array of blog posts, and need to retrieve one post by its ID
// find()