// this function should accept 2 parameters, put them in!
function each(arr, callback){
    for(val of arr){
        callback(val);
    }
}


each([1,2,3,4], function(val){
    console.log(val);
});
// Here is what should be output if you wrote the function correctly

// 1
// 2
// 3
// 4

each([1,2,3,4], function(val){
    console.log(val*2);
});

// Here is what should be output if you wrote the function correctly

// 2
// 4
// 6
// 8