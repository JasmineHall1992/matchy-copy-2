/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

const { animal } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: takes in an array of animals, takes in a string representing the name of an animal(for a search)
//O: returns the animals Object if an animal with that name exists
//O: returns a null if no animal with that name exists
//C: make case insensitive when dealing with a string
function search(animals, name) {
    // Loop through the array of animals
    for (let i = 0; i < animals.length; i++) {
      // Check if the current animal's name matches the name we are searching for, make lowercase for case sensitivity
      if (animals[i].name.toLowerCase() === name.toLowerCase()) {
        return animals[i]; // Return the entire animal object
      }
    }
    // If no animal is found, return null
    return null;
  }
  


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an array of animals, a string representing the name of an animal, an Object to replace animal
//O: if the name exists within the araym replace the object with replacement object
function replace(animals, name, replacement) {
    // Loop through the array of animals
    for (let i = 0; i < animals.length; i++) {
      // Check if the current animal's name matches the name we are searching for
      if (animals[i].name === name) {
        animals[i] = replacement; // Replace the entire animal object
        return; // Exit the function after replacing
      }
    }
    // Do nothing if no match is found
  }

  

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*1. Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
   - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
   - If an animal with that name exists within the `animals` Array, remove it.
 2. Test that it works on the website.*/

 function remove(animals, name){
  for(let i = 0; i < animals.length; i++){
      if(animals[i].name === name){
          animals.splice(i, 1) //NOT animals[i].splice(1), but animals.splice(i, 1)
      }
  } return animals
   }
  


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
Write a function declaration called add with a signature of add(animals, animal) { //... } that:
Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
Checks that the animal Object has a name property with a length > 0.
Checks that the animal Object has a species property with a length > 0.
Has a unique name, meaning no other animals have that name.
Adds this new Object to the animals Array, only if all the other conditions pass.
Make sure it works.

I: array and object
O:
C: conditional statements for name, species
E:
*/

function add(animals, animal) {
  // Check if the animal has a valid name and species
  if (animal.name && animal.name.length > 0 && animal.species && animal.species.length > 0) {
    // Check if the animal already exists in the array
    for (let i = 0; i < animals.length; i++) {
      if (animals[i].name === animal.name) {
        return; // Exit if the animal already exists
      }
    }
    // Add the new animal to the array
    animals.push(animal);
  }
}
ß
  

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
    module.exports = { search, replace, remove, add };

}