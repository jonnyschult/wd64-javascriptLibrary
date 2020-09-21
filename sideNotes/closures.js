/*
* ******************
! Closures
* ******************

    - Closure is when a function is able to access variables from an outer function that has already returned. 
    - Provide a measure of security. 

*/

function outer(a) {
    return function inner(b) {
        return a + b;
    }
}

outer(5); //returns the inner function

outer(5)(6); // the second parenthesis invoke the innerfunction with an argument. This returns 11

let laterAdd = outer(10); // This is equivalent to storing the expression function, with the inner function beiung stored inside. 

laterAdd(15); // Result is 25. Later add invokes the innerfunction. 

//? PRIVATE VARIABLES
// Private variables are only accessible through an inner function. 

function defineAge(){
    let age = 28;
    return function growUp() {
        return ++age;
    }
}

let ageOnce = defineAge();
ageOnce(); // returns 29 by invoking the innerfunction. 
ageOnce(); //returns 30

function createInstructors() {
    let instructors = ['Ellie', 'Matt', 'Tim',];
    return {
        showInstructors: function displayAllInstructors() {
            return instructors;
        },
        addInstructor: function addNewInstructor(instructor){
            instructors.push(instuctor);
            return instructors;
        }
    }
}let firstClass = createInstructors()
firstClass.addInstructor('Jennifer');
firstClass.showInstructors();