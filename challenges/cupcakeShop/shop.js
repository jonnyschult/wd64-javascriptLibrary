const Cupcake = require('./cupcake')

class Shop {
    constructor (location, owner) {
        this.location = location;
        this.owner = owner;
    }

    getLocaion(){
        console.log(`This shop is located at: ${this.location}.`);
    }

    getOwner(){
        console.log(`This shop is owned by ${this.owner}`);
    }

    changeOwner(newOwner) {
        this.owner = newOwner;
    }
}

class CupcakeShop extends Shop {
    constructor(location, owner, name) {
        super(owner, location);
        this.name = name;
        this.inventory = [];
        this.cash = 0;

    }

    bakeBatch(count, batter, icing, price) {
        //make COUNT cupcakes, push them into the inventory
        for(let i = 0; i < count; i++) {
            let newCupcake = new Cupcake(icing, batter, price)
            this.inventory.push(newCupcake)
        }
    }

    sellCupcake(){
        // remove cupcake from inventory and increase cash by price. 
        if(this.inventory.lenth === 0){
            return 'no cupcakes in inventory. Sale aborted.'
        } else {
            let soldCupcake = this.inventory.pop();
            this.cash += soldCupcake.price;
        }
    }
}

let theGlassPastry = new CupcakeShop ('LaPorte', "Jonny", "The Glass Pastry");
console.log(theGlassPastry);

theGlassPastry.bakeBatch(13, "carrot", "Sour Cream", 4.50);
//console.log(theGlassPastry);

theGlassPastry.sellCupcake();
console.log(theGlassPastry)

function Fan (diameter, amps) {
    this.diameter = diameter;
    this.amps = amps;
}

let myFan = new Fan (12, 120);

Fan.prototype.turnOn = function() {
    this.isOn = true;
}

console.log(Fan.toString)