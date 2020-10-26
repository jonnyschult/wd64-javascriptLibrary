class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last; 
        this.email = e;
    }
}

let userOne = new User("Paul", "O'Connor", "paconnor@elevenfifty.org");
// console.log(userOne.first);
// console.log(userOne.f);
// console.log(userOne.l);
// console.log(userOne);

class Player{
    constructor(name, number, difficulty){
        this.name = name;
        this.number = number;
        this.difficulty = difficulty
    }
    greet(){
        console.log(`Are you ready for an intergalactic adventure, ${this.name}?`)
    }
    averagePoints(...points){
        let pntTotal = 0
        points.forEach(pointEntry => {
            pntTotal += pointEntry;
        })
        console.log(`Here are your average points ${pntTotal/points.length}`)
    }1
}

let player117 = new Player("John", "1", "Legendary");

player117.greet();
player117.averagePoints(7, 34, 1, 3, 56, 7, 234, 9);