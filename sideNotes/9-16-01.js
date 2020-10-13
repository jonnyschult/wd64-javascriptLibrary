/*
? QUICK CHALLENGE
************
    - dive into the array and pull out the name 'Marshall'
    - dive into the nested array and pull the value 'Will'
    - print out (console log) "Hello Marshall!"
    - print out (console log) "Hello Will!"
*/

// Index Positon: (0)       (1)       (2)    (3)   (4)  (5)               (6)
let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Will']];
// Index 6 nested values:                                       (0)     (1)      (2)

console.log(students[1]);
console.log(students[6][2]);
console.log(`Hello ${students[1]}!`);
console.log(`Hello ${students[6][2]}!`);

//? ARRAY METHODS

// We have multiple methods to allow us to manipulate arrays as we may need. 

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for(foodItem of food) {
    console.log(foodItem);
}