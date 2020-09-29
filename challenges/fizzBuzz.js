/*
! FIZZBUZZ WHITEBOARDING CHALLENGE (pair coding)
************
    - create a variable named FB that gets initialized with a number
    - write a conditional that:  - 100 range
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - otherwise, prints the number
*/

// let FB = 100;
// function fizzBuzz (num){
//     for (let i = 1; i <= FB; i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             console.log('fizzBuzz')
//         } else if(i % 3 == 0){
//             console.log("Fizz")
//         } else if (i % 5 == 0){
//             console.log('Buzz')
//         } else {
//             console.log(i)
//         }
//     }
// }

let FB = 1230;
function fizzBuzz (num){
    for (let i = FB; i <= FB+100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log('fizzBuzz')
        } else if(i % 3 == 0){
            console.log("Fizz")
        } else if (i % 5 == 0){
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz()