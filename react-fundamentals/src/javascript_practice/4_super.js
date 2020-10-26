class User {
    constructor(username, password){
        this.username = username;
        this.password = password;
        this.type = "Trial User"
    }
    greet(){
        console.log(`Welcome back, ${this.username}.`);
    }
    status(){
        console.log(`Current status: ${this.type}.`);
    }
}

let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

//super
class BronzeLeverUser  extends User {
    //We add ccinfo property to the user here. 
    constructor(userusername, password, ccinfo) {
        super(userusername, password);
        this.type = `Bronze User`;
        this.ccinfo = ccinfo;
    }

    getInfo(){
        console.log(this.username, this.password, this.type, this.ccinfo);
    }
}

let bronzeGuy = new BronzeLeverUser(`Bronze Guy`, `bronze7589`, `42424242424242`);

bronzeGuy.getInfo();
