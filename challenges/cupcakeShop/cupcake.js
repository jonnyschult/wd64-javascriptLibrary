// What should a cupcake have? 
// Sellig Points: Icing, Cake, Price

class Cupcake {
    constructor (icing, cake, price) {
        this.icing = icing;
        this.cake = cake;
        this.price = price;
    }

    getDescription() {
        console.log(`A ${this.icing} topped ${this.cake} cupcake for $${this.price}`)
    }
}

class Pie {
    constructor (icing, cake, price) {
        this.icing = icing;
        this.cake = cake;
        this.price = price;
    }

    getDescription() {
        console.log(`A ${this.icing} topped ${this.cake} cupcake for $${this.price}`)
    }
}


/* 

APIE
    - A) Abstaction: Hide complicated detail behind an easy interface. 
    - P) Polymorphism: One interaction, but with many implementations (sting.length, array.length)
    - I) Inheritance: Class hierarchy that shares functionality and attributes. 
    - E) Encapsulation: Data and functionality to manipulate that data are bundled together. 
*/

module.exports = Cupcake;