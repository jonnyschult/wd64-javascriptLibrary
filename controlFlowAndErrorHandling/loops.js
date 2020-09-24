/*
* ****************
! FOR LOOPS
* ****************
    - Loops help us repeat a process without writing a lot of code. 

    We need to:
        1) Create an index
        2) Run a condition
        3) Change the indexing
    
*/

for(let i = 2; i < 10; i++) {
    console.log(i);
}

/*
    We state our loop with a "for".
    Within this function, we are injecting some parameters that JS will run against 
        (index; condition; change index -> result)

        for(<create index varian>; <run condition>; <change index>) {
            <return results>
            *will cont. until run condition is met. 
        }
*/

let x = 20;

for(let i = 10; i < x; i++) {
    console.log(i);
}

for(let i = 2; i > -10; i -= 4){
    console.log(i);
}

// let word = `Supercalifragilisticexpialidocious`;

// for(let i = 0; i < word.length; i++){
//     console.log(i, word[i]);
// }

/*
* *********************
! FORIN LOOP
* *********************
*/

let city = {
    name: "La Porte",
    pop: "21,000",
    speedway: "false",
};

for(info in city) {
    console.log(`${info}: ${city[info]}`);
}

/*
    for(variable IN object) {
        <statement>
    }
*/

// let list = ['soy milk', 'Just Egg', 'beans', 'bread', 'banana']

// for (item in list) {
//     console.log(list[item])
// }

//! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.

//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

let name = 'piCard'; 
let properName = ''
for(letter in name) {
    letter == 0 ?  properName += name[letter].toUpperCase() : properName += name[letter].toLowerCase(); //Why won't !letter register as true?!?!?!?!?!
}

console.log(properName);

/*
    1) We are taking the value of the "n" index and declaring the position of 0
    2) We assign our empty variable to equal that positioned value.
    3) If that index is 0, we will take that value and run a ".toUpperCase()" method on it.
    4) If the index is NOT 0, we still want to include it into our empty variable and utilize our += expression si it know to add the next value (or n++)
    5) If the index is NOT 0, we want to run a ".toLowerCase()" method so that all letters are in proper case. 
*/

/*
* **********
! FOROF LOOP
* **********
    - In oder to run a FOR OF loop, the "thing" MUST be numbered like an aray. 

    let object = {
        key: value,
        key: value,
        key: value,
    };

    for(o of object){
        <break> WON'T WORK
    }
*/

// let objRandom = {
//     0: 1,
//     1: 2,
//     2: 3,
// } wont work with for of loop. 

let indexArr = ['spot', 2, true, 'four',];

for(pos of indexArr) {
    console.log(pos);
}

for(pos in indexArr){
    console.log(pos);
}

/*
? Quick Recap;
    for loop: loops through a block of code until the counter reaches a specified number.
    for in loops: loops through properties of an object. returns index/key
    for of loops: loops over iterable objects such as arrays and *strings can be accessed much in the same way as arrays. returns value
*/