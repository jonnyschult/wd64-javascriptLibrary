/*
With the given shoppingList array, use array destructuring to assign each array within the shoppingList array its own variable. Then, reinitialize the shoppingList array so it is a single array containing all of the values from the original array. See screenshots below. 
Original shoppingList array:

shoppingList array after being reinitialized 

After the shoppingList array has been reinitialized to look like the above screenshot, using the array.prototype.map method, map over the newly initialized shoppingList array. You should do the following within the map method:

*include a parameter for index 
*utilize the array.prototype.push method to push the current value being mapped over into the appropriate key/value pair in the obj variable  
*You will need to implement some sort of logic to check the index of the current item being mapped over.
*/

let shoppingListArray = [
    ['eggs', 'milk', 'butter'],
    ['cleaner', 'trash bags', 'detergent'],
    ['thank you card', 'pens', 'gift wrapping'],
    ['shoes', 't-shirt', 'slacks']
]

let [animalCrueltyItems, houseHoldItems, gifts, clothes] = shoppingListArray;
console.log(shoppingListArray)

shoppingListArray = [...animalCrueltyItems, ...houseHoldItems, ...gifts, ...clothes];
console.log(shoppingListArray)

let obj = {
    animalCrueltyItems: [],
    houseHoldItems: [],
    gifts: [],
    clothes: [],
}

shoppingListArray.map((curVal, index) => {
    
    if(index < 3){
        obj.animalCrueltyItems.push(curVal);
    } else if (index < 6){
        obj.houseHoldItems.push(curVal);
    } else if (index < 9){
        obj.gifts.push(curVal)
    } else {
        obj.clothes.push(curVal);
    }

});

console.log(obj);