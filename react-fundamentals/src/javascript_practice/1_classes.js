//ES6 JS Classes
class User {
    constructor(name){
        this.name = name;
        this.type = "trial User"
    }
    //Method 1
    greet(){
        console.log(`Welcome back, ${this.name}!`);
    }
    //Method 2
    status(){
        console.log(`Current status: ${this.type}.`);
    }

}

//Instance of the class/new object
var anonDude = new User("Anonymous dude");

//We can now use the instance and the . operator to access the 2 methods. 
anonDude.greet();

anonDude.status();

//Another instance of the class
let jeff = new User("Jeff");
jeff.greet();
jeff.status();

let jonny = new User("Jonny")
jonny.greet();
jonny.status();

let kristin = new User('Kristin');
kristin.greet();
kristin.status();