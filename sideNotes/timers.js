/*
* *****************
! setInterval and setTimeout
* *****************
*/

let timerId = setInterval(() => console.log('Hello'), 1000);

//? CLEARTIMEOUT 
// Timers return a value, when that value is processed in clearTimeout, it ends the timer. 

setTimeout(function() {
    clearTimeout(timerId); 
}, 3000)

/* 
    Timers are an important part of asynchronous programming. Couple of other important concepts
        - Functions operate as a LIFO (last in first out) data structure (Like a stack of books)
        - Event queue allows is FIFO (first in first out) data structure. Functions will only be called once the stack is empty. This allows for an orderly processing of various function stacks (?)
*/ 

//? EVENT LOOP

console.log('first');
setTimeout(() => console.log('second'), 0);
console.log('third'); 
// returns first third second. 
/* 
    What happens? 
        - the first log function goes on the stack, prints out 'first', and then it comes off the stack, leaving it empty. 
        - a message is sent to the QUEUE to log 'second' in 0 ms
        - During that time, another log function comes on the stack and prints out 'third'
        - Now the stack is clear so the callback to the setTimeout goes on the stack and 'second is printed. 
*/