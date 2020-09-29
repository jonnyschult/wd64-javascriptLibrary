function map(arr, fn){
    for (val of arr) {
        console.log(fn(val));
    }
}

map([1,2,3,4], function(val){
    return val * 2;
}); // [2,4,6,8]

function reject(arr, fn){
    let newArr = [];
    for (val of arr) {
        fn(val) ? null : newArr.push(val) ;
    }
    console.log(newArr);
}

reject([1,2,3,4,5,6], val => val > 2)
reject([2,3,4,5], val => val % 2 === 0)
