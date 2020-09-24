let amIGood = false;

let iCanHasGift = new Promise(
    function (resolve, reject){
        if(amIGood) {
            let gift = {
                brand: 'HasMattelBro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift);
        } else {
            let naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty)
        }
    }
) 

// let checkTwice = function () {
//     iCanHasGift
//         .then(function(fullfilled){
//             console.log(fullfilled);
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
// }

// checkTwice()

// let playDate = function(gift) {
//     return new Promise(
//         function(resolve, reject){
//             let message = `Salutation fellow child I enjoy interacting with! I notice you received a posable plastic Batan figurine during the Yultide season. What do you think of my new ${gift.brand} ${gift.item}?`

//             resolve(message)
//         }
//     );
// };

let playDate = function (gift){
    let message = `Salutation fellow child I enjoy interacting with! I notice you received a posable plastic Batan figurine during the Yultide season. What do you think of my new ${gift.brand} ${gift.item}?`
    return Promise.resolve(message);
}

let checkTwice = function() {
    iCanHasGift
        .then(playDate)
        .then(function (fulfilled) {
            console.log(fulfilled)
        })
        .catch(function (error) {
            console.log(error)
        })
}

checkTwice() 