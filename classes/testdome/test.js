function filterNumbersFromArray(arr) {
    // Write the code that goes here
    let arrOfIndices = [];
    for (let i = 0; i < arr.length; i++){
        if(isNaN(arr[i])){
            arrOfIndices.unshift(i);
        }
    }

    for(let i = 0; i < arrOfIndices.length; i++){
        arr.splice(arrOfIndices[i], 1);
    }
    return arr
}
  
  var arr = [1, 'a', 'b', 'd', 'g', 'h', 2];
  console.log(filterNumbersFromArray(arr));

  for (var i = 0; i < arr.length; i++)
    console.log(arr[i]);
  