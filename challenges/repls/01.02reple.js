let bestMovie = {
    nameOfMovie: 'O Brother, Where Art Thou?',
    runTime: 108,
    characters: [ {charOne: {
      name: 'Ulysses Everett Mcgill',
      age: 39,
      items: [{itemOne: 'Hair nets'}, {itemTwo: 'Dapper Dan'},],
    }},
    {charTwo: {
      name: "Delmar O'Donnell",
      age: 32,
      items: [{itemOne: 'Pig'}, {itemTwo: 'Toad'},],
    }
    }],
    genre: ['Adventure', 'Crime', 'Comedy'],
  }


  console.log(bestMovie.nameOfMovie);
  console.log(bestMovie.runTime);
  console.log(bestMovie.characters);
  console.log(bestMovie.characters[0].charOne.name);
  console.log(bestMovie.characters[0].charOne.items[1].itemTwo);
//   Use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has. Your console should look similar to the screenshot below.