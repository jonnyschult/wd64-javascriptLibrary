/*
* ************
! TYPES
* ************

? Data and Structure Types
* ************
    - Primitive Data Types:
        - boolean
        - undefined
        - number
        - string
            - bigInt*
            - symbol*
        - null
        - Object
        - Function
*/

//? BOOLEANS
//* ************

// A boolean has two possible values: true and false

let on = true;
let off = false; 

console.log(on);

//? NULL
// A null valie is an empty value. THink of it as an empty container that has spcae to fill. 

let empty = null;
console.log(empty);

//intentionally set to nothing, unlike undefined, which can just be unintentionally nothing. Null has been interacted with. 

//? UNDEFINED
//No value has been assigned to a container.

let undef = undefined;
console.log(undef);
let password;
console.log(password);

/*
    - Null is like a container with nothing in it. 
        - Null you can trust as zero - Undefined not so much.
    - Undefined is when a variable has never been set, or hasn't been created yet. 
 */

//? NUMBERS

let degrees = 90; 
console.log(degrees); 

let precise = 999999999999999; //15 9's
console.log(precise); 

let rounded = 9999999999999999; //16 9's (logs as 1000000000000000)
console.log(rounded)
// JS gives us space for 15 9s before rounding up. 

let notQuite = 0.2 + 0.1;
console.log(notQuite);
// JS rounds out at a certain number, so if math is needed, be aware!

let whatIf = (0.2 * 10 + 0.1 * 10);
console.log(whatIf);
let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);
// console.log('.' + whatIf);

//? STRINGS

// Strings represent text and are wrapped in either single or double quotes.

let doubleQuote = "Double Quote";
let singleQuote = 'Single Quote';
let bothQuotes = 'I said, "What about Bob?"';
console.log(doubleQuote, singleQuote);

let inception = "I've";
let singleQ = 'I\'ve';
console.log(inception, singleQ);

//? Number vs String
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = '1050' + '100';
console.log(addTheseAlso);

console.log(typeof addThese);
console.log(typeof addTheseAlso);
// We can use an operator called 'typeof' that returns a string that tells us exacly what our variable "type" is. 

let stringToNumber = Number('1150');
console.log(stringToNumber);
console.log(typeof stringToNumber); 

//? OBJECTS
/*
    - Objects are used to store many values instead of a singular value. 
    - Consider these as a collection of various properties.
    - denoted by curly brackets: {}
*/

let frodo = {
    race: 'hobbit', //string
    rings: 1, //number
    sting: true, //boolean
}

console.log(frodo);
console.log(typeof frodo);
// Left hand of the ":" in objects are known as keys. Right hand is the value. 
// key: value, 

let obj = {
    key: 'value',
}

console.log(obj); 

//? ARRAYS
/*

    - Containers that hold a list of items.
    - denoted by square brackets: []
    - all items are within the square brackets. 
    - regardless of datatype, each item is seperated by a comma. 

*/

let arrayList = ['pos 1', 'pos 2', 'pos 3',];
console.log(arrayList);

let anotherExample = [1, 2, 'three',];
console.log(anotherExample);

console.log(typeof anotherExample);
// JS classified arrays as objects and not a datatype of their own. 

let objArr = [{
    race: 'hobbit', //string
    rings: 1, //number
    sting: true, //boolean
}]

console.log(objArr);

//? ADDITIONS vs CONCATENATIONS
/*

    - JS sees the "+" symbol in two different ways.
        - When combined with numbers, uses built-in math functionality.
        - When combined with strings, it ignores the math and concats the two strings. 

*/

let strings = 'one' + ' ' + 'is a number';
let concatDiff = 1050 + '100';
console.log(strings);
console.log(concatDiff);
console.log(typeof concatDiff);

/* 

    set seven different variables
    firstname
    lastName
    HouseNumber
    aptNumber
    street
    city
    state
    zipcode
    
    Set each variable to its respective type.
    
    console.log your whole address (with a space between variables).
    
*/

let firstName = "Jonny";
let lastName = "Schult";
let street = "2nd St.";
let city = "La Porte";
let state = "IN";
let zipcode = 46350;

console.log(firstName, lastName, street, city, state, zipcode,);
console.log(firstName + " " + lastName + ", " + street + ", " + city + ", " + state + ", " + zipcode);

//? String: Properties

/*

    - strings have properties, or the qualiteis associated with that string. 
    - the length of a string is a property. 

*/

let myName = "Jonny";
console.log(myName.length);

//? String: Methods
/*
    -methods are tools that can help us manipulate our data
*/

let myNameIs = 'Jonny';
console.log(myNameIs.toUpperCase()); // this is a method that changes a string to uppercase
console.log(myNameIs.toLowerCase()); // this is a method that changes a string to lowercase

let home = 'My home is LaPorte';
console.log(home.includes('LaPorte'));
