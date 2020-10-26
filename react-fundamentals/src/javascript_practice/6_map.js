const instructors = [
    {name: 'Quincy', specialty: 'Quantum Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Paul', specialty: 'Tuvan throat singing'},
    {name: 'Aaron', specialty: 'Entomology'},
    {name: 'Carolyn', specialty: 'Kung Fu'},
];

// let instructorNames = [];
// for (let i = 0; i < instructors.length; i++){
//     instructorNames.push(instructors[i].name);
// }

// console.log(instructorNames)

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames)

let kvArray = [
    {key: 1, value:10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];
// console.log(kvArray);

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
    return rObj;
}); 

console.log(kvArray[0].key)