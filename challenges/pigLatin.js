/*
! PIG LATIN CHALLENGE (pair coding) - morning
************
    - Create a function that takes in strings
    - In the function, translate a english into pig latin and print it to the console.
    - If able to do so, return the value into another variable and print that variable
    What is Pig Latin?
        * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
        * If the word begins with a vowel, simply add an 'ay' at the end of the word
    - It is greatly encouraged to seek out possible solutions utilizing MDN (or anything else that may be helpful).
*/

let english = "Kristin Joy Swartz is the best person to ever live";
let spanish = "mis amigas";

function pigStone(phrase){
    let listPhrase =  phrase.split(' ');
    let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
    for(let i = 0; i < listPhrase.length; i++) {
        if(vowels.includes(listPhrase[i][0])){
            listPhrase[i] = listPhrase[i] +'ay';
        } else {
            let wordSplit = listPhrase[i].split('')
            let counter = 0;
            while(!vowels.includes(wordSplit[0])){
                let consonants = wordSplit.shift(); //able return the value of "T" to the variable consonants 
                wordSplit.push(consonants); //["a", "b", "l", "e", "T"] ableT
                counter++;
                if(counter > 10){
                    break;
                }
            }
            let newWord = wordSplit.join(''); //ableT
            newWord = newWord + 'ay'; //ableTay
            listPhrase.splice(i, 1, newWord);
        }
    }
    let returnValue = listPhrase.join(' ');
    return returnValue;
}


console.log(pigStone(spanish));