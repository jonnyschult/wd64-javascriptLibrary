//! Challenge 2: Take Home Challenge
/*  
Create a switch statement that takes in a value (number) that represents a grade.  If it is True, console log that they are passing with the correct letter grade.
*   A: 89-100
*   B: 79-88
*   C: 66-78
*   D: 59-65
*   F: 0-58
*/

let gradeNum = 100;

function letterGrade(grade){
    grade >= 89 ? returnValue = "A" 
        : grade >= 79 ? returnValue = "B" 
        : grade >= 66 ? returnValue = "C"
        : grade >= 59 ? returnValue = "D"
        : returnValue = "F";
        return returnValue;
}

switch(letterGrade(gradeNum)){
    case "A":
        console.log(`${gradeNum} passes with flying colors! A!`);
        break;
    case "B":
        console.log(`${gradeNum} is a solid score. Good work! B!`);
        break;
    case "C":
        console.log(`${gradeNum} is passing, but you may want to put in some more work so that you can have a better grasp of the concepts! C.`);
        break;
    case "D":
        console.log(`${gradeNum} is scraping by. Better work harder! D.`);
        break;
    case "F":
        console.log(`${gradeNum} is unacceptable. You must have gone to Notre Dame! F!`);
        break;
    default:
        console.log("Something went wrong")
}

