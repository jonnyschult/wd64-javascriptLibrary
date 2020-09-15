/*
* *******************
! HOISTING
* ******************

    What is Hoisting?
        - JS pulls all variables and functions calls to the 'top' of their respective scope prior to being executed. 
        - Only the declaration is pulled up, NOT the assignment. 
*/

// console.log(hoistedVar);

// console.log(`how JS sees hoistedVar: `, typeof hoistedVar);
// var hoistedVar = 'using '; // console logs undefined if console logged before initialization. 
// let hoistedVar = 'using let'; //throws error.

// console.log(noVariable); // Breaks in the same way as let when hoisted. 


//? Hoisting in a Function
// This process is considered the same within a function. on the first pass, it reads it, pushes the declaration to the top and then executes them in the order that they are written. 

function testHoist() {
    becomesGlobal = `not declared, it becomes part of the global scope`;
    console.log(`Prior to declaring `, insideFunc);
    var insideFunc = `Rules still apply here`;
    console.log(insideFunc)
}

testHoist()
console.log(becomesGlobal);

// It is best practice to ALWAYS declare variables regardless of weather they are in a function or global scope. This makes it clear how it should be handled. 

//? Using LET
// The keyword 'let' is block scoped and not function scoped.

console.log(letVariable);
let letVariable = 'Using Let';
// This throws a ReferenceError due to ES6 not accepting undeclared variable. This is to ensure we ALWAYS declare our variables FIRST

//? Hoisting Function
// Function Declarations:

hoistedFunc();

function hoistedFunc() {
    console.log(`This is a hoisted function`);
}

// Function Expressions:
// The below are NOT hoisted. 

expressionFunc();

let expressionFunc = function () {
    console.log(`Works?`); // No, it doesn't work. 
}