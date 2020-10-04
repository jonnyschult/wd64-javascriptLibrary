/*Challenges will be sumbitted via repl, and scores will be entered in to Canvas after grading
Create a class named Polygon that contains the following information:

A constructor method with a parameter to capture information (hint: this should be capturing an array of numbers).  
assign the parameter to a key using 'this' 
Has a method named perimeter, that should do the following:  
return ONLY the parameter, or an empty array from the method
call the reduce method on your return value to get a single output value
Create a new object/instance of the class Polygon that is stored in a variable.


The new Polygon should accept an argument that is an array of 4 numbers
console.log the return value from the newly created Polygon.
p = 3 + 3 + 8 + 8. Since this is a rectangle, the  opposite sides have the same lengths, 3 cm. and 8 cm. Add up the lengths  of all four sides to find the perimeter.
*/

class Polygon {
    constructor(dimensions) {
        this.dimensions = dimensions;
    }
    
    perimeter(x){ //is it supposed to return only the parameter, I also wasn't sure which parameter, the constructor parameter for creating an instance or a method parameter. I did both because I don't want to get it wrong, haha.
      return x;
    }
    
    perimeterTwo(){
      return this.dimensions.reduce((perimeter, side) => perimeter += side) //this seems far more likely to be what you have in mind. 
    }
}

let rectangle = new Polygon([14.5, 96, 14.5, 96]);

console.log(rectangle)

console.log(rectangle.perimeterTwo());

console.log(rectangle.perimeter('Stop repeating me!!!'))