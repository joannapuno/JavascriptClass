// RegEx

// RegExp Constructor
var regEx1 = new RegExp("abc");

// literal value
var regEx2 = /abc/;

console.log(/abc/.test('abcde'));//true
console.log(/abc/.test('abdsds'));//false

var regEx3 = new RegExp('01');
var regEx4 = /01/; 

