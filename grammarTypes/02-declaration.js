/*
* ************
! VARIABLES
* ************
*/

console.log("hello");
// THe console is a debugging tool

let a = 2;

/* 
- let : is our KEYWORD
- a : is our NAME of our variable
- = : is our ASSIGNMENT OPERATOR
- 2 : is our variable VALUE
*/

let b = 1;

console.log(a + b);

//! RESTRICTIONS
/*
    - a variable name must begin with a letter, underscore, or a dollar sign.
    - number may follow the above characters, BUT cannot come first.
    - javascript is case sensitive - 'hello' and 'Hello', these would be different variables.
    - no spaces are allowed in variable names. 
    - camelCase is the best practice for naming
    - ex:
        let myName = 'Jonny';
        is easier to read than
        let myname = 'Jonny'

*/

let startingWithLetter = "Works";
let _startWithUnderscore = "Works";
let $startWithNumber = "Works";
// let 4startWithNumber = "Breaks"

console.log(startingWithLetter, _startWithUnderscore, $startWithNumber);

let PascalCase;
let camelCase;
let snake_case;

/*
*KEYWORDS

var, let, const

    - var: 'old' keyword for variable. ** We won't be using it as often but is still a viable one to use. 

    - let: "new" keyword for variable. (Inroduced with ES6 *newest version of ECMAScript, which is a standardization of JS)

    - const: also "new" keyword that declares an UNCHANGABLE, or constant, variable. 
*/

var variable = 'var variable';
let letVariable = 'let variable';

// let function = 1; cannot use reserved words within a variable name -*function is a reserved word. 

/* 
* **********
! DECLARATION & INITIALIZATION
* **********
*/
// Declaration are the LEFT SIDE of the assignment operator
//let x;

//Initialization are the RIGHT SIDE of the assignment operator
//let x = 10;

//10 is our initialization

let y;
console.log('declaration:', y);

y = 10;
console.log('initialization:', y);

y = 33;
console.log('initialization 2:', y);
//var

// We've set our variable with our let keyword. With each iteration, we have redeclared what it is. 

//? const

let today = "Great!";
const efa = "Wonderful!";
console.log(today, efa);

today = "Awesome";
console.log(today, efa);

// efa = "Super"
console.log(today, efa)
// const allows us to make a variable that we don't want to change. 


