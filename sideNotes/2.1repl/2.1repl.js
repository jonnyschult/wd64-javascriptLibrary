// CREATING THE IMG TAGS FOR THE HTML

function createImgs () {
    const newDiv = document.createElement('div');

    const scriptElement = document.querySelector('script');
    document.body.insertBefore(newDiv, scriptElement);

    const imageOne = document.createElement('img');
    imageOne.setAttribute('id', 'imageOne');

    const imageTwo = document.createElement('img');
    imageTwo.setAttribute('id', 'imageTwo');
    newDiv.appendChild(imageOne);
    newDiv.appendChild(imageTwo);
}

createImgs();

// GETTING THE INFORMATION
let url = 'https://rickandmortyapi.com/api/character/';

let rickMortyInfo = async () => {
    let response = await fetch(url);
    let jsonInfo = await response.json();
    console.log(jsonInfo);
    return jsonInfo;
}

// SETTING IMAGES TO API IMAGES
let imageAssignements = rickMortyInfo().then(json => {
    let alienMorty =  json.results[13].image;
    let alienRick = json.results[14].image;

    imageOne.src = alienMorty;
    imageTwo.src = alienRick;
});