/*
* ***********
! CONDITIONALS
* ************

? FALSY VALUES:
    - false
    - 0
    - "", '', ``
    - null
    - undefined
    - NaN (not a number)

    when JS is expecting a boolean value and it is returned with one of these 6 values, it is evaluated as "falsy"

*/

/* 
* **************
! IF
* **************

    -"If" something is true, do "this thing"

*/

let light = "on";

if (light == "on") {
    console.log("The light is on");
}

let weather = 65;

if(weather < 70){
    console.log('Wear a jacket.');
}

let rain = true;

if(weather < 70 && rain != false){
    console.log("It is a little chilly and will possibly rain.");
}

/*
* **************
! IF ELSE
* **************
    If/Else statements allow us the ability to write out a chain of events.
*/

let today = 75;

if(today < 70) {
    console.log("It is " + today + ", wear a jacket.")
} else {
    console.log("It is " + today + ", no jacket needed.")
}

/*

! CHALLENGE

    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let name = "Jonny";

if(name == "Jonny"){
    console.log("Hello, my name is " + name);
} else {
    console.log("Hello, is your name " + name + "?");
}

/*
* *************
! ELSE IF
* *************
    This is a condition that would be checked if the above condition was not met. 
*/

let cookTime = 10;

if(cookTime === 45) {
    console.log("Let us feast!");
} else if(cookTime >= 30) {
    console.log(`It has only been ${cookTime} minutes. Wait another 5 - 15 minutes.`);
} else if(cookTime >= 20) {
    console.log(`It has only been ${cookTime} minutes. Wait another 10 - 25 minutes.`);
} else {
    console.log(`It has only been ${cookTime} minutes. Perhaps at least try cooking it...`);
}

// The end of ELSE IF statement should have a simple "else" to finish it. 

//! CHALLENGE

/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 31;

if(age >= 25){
    console.log(`${age} is old enough to rent a car!`);
} else if(age >= 21){
    console.log(`${age} is old enough to drink!`);
} else if(age >= 18){
    console.log(`${age} is old enough to vote!`);
}else{
    console.log(`Sorry, ${age} is too young to do anything.`);
}

/*
* *******************
!TERNARIES
* *******************
    - This is a quick way of considering an if/else statement. We are capable of writing out our condition in a simple line. 
*/

let myName = 'Jonny';

// if(myName == "Jonny"){
//     console.log(`Hello, my name is ${myName}.`);
// } else {
//     console.log(`Hello, is your name ${name}?`);
// }

//? condition ? true result : false (else) result

myName === "Jonny" ? console.log(`Hello, my name is ${myName}.`) : console.log(`Hello, is your name ${myName}?`);

//! CHALLENGE
// Take this if/else statement and make it into a ternary.
let lampOn = false;
let daytime = true;
// if(lampOn == true && daytime != true) {
//     console.log('The lamp is on during the night')
// } else if(lampOn != true && daytime != true) {
//     console.log('The lamp is off during the night')
// } else if(lampOn == true && daytime == true){
//     console.log('The lamp is on during the day')
// } else if(lampOn != true && daytime == true) {
//     console.log('The lamp is off during the day')
// } else {
//     console.log('What lamp?')
// }

lampOn == true ? (daytime == true ? console.log("The lamp is on during the day") : console.log("The lamp is on during the night")) 
    : (daytime == true ? console.log('the lamp is off during the day') : console.log("the lamp is of during the night"));

/*
* ***************
! SWITCH
* ***************

    - executes a block of code depending on different cases.
*/

let instructor = 'Josh';

switch(instructor) {
    case 'Ing' :
        console.log(`${instructor} is a part of the Web Dev Team`);
        break; //Once each case has been evaluated and we return a result, we need to note to "break" out from our switch.
    case 'Zach' :
        console.log(`${instructor} is a part of the Web Dev Team`);
        break;
    case 'Josh' :
        console.log(`${instructor} is a part of the Software Dev Team`);
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches at this time.`);
        //Need to use a default to help us catch those cases when none are true. 
}

instructor = `Adam`;

switch(instructor){
    case 'ing':
    case 'Adam':
    case 'Eric':
    case 'Zach':
    case 'Donovan':
        console.log(`${instructor} is part of the Web Dev team.`);
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey':
        console.log(`${instructor} is part of the Web Dev team.`);
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches.`)
}
