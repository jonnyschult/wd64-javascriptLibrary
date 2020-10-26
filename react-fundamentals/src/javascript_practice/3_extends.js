//ES6 JS Classes
class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    greet(){
        console.log(`Welcome back, ${this.name}.`);
    }
    status(){
        console.log(`Current status: ${this.type}.`);
    }
}

//Extends
class TrialUser extends User {
    trialEnding(){
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`)
    }
}

//Instance of User clas
let anonDude = new User('Anonymous');
anonDude.greet()
anonDude.status();

//Instance of TiralUser class
let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.status();
trialUser.trialEnding();

class BannedUser extends User {
    bannedMessage(){
        console.log(`${this.name}, you have been banned from our platform for excessive use of the word "Literally". Many found it hostile and offensive. Best of luck and get better.`)
    }
}

let chrisTraeger = new BannedUser("Chis Traeger");
chrisTraeger.greet();
chrisTraeger.bannedMessage();