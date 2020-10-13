function filterNumbersFromArray(arr) {
  // Write the code that goes here
  for (let i = 0; i < arr.length; i++){
    if(typeof arr[i] !== 'number'){
      arr.splice(i, 1);
      filterNumbersFromArray(arr);
    }
  }
}

var arr = [1, 'a', 'b','e', 'f', true, 2];
filterNumbersFromArray(arr);
for (var i = 0; i < arr.length; i++)
  console.log(arr[i]);
