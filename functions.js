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
      // Check if the current animal's name matches the name we are searching for
      if (animals[i].name === name) {
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
function remove(animals, name) {
    // Loop through the array of animals
    for (let i = 0; i < animals.length; i++) {
      // Check if the current animal's name matches the name we are searching for
      if (animals[i].name === name) {
        animals.splice(i, 1); // Remove the animal at index i
        return; // Exit the function after removing
      }
    }
    // Do nothing if no match is found
  }
  
  


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, newAnimal) {
    // Check if the new animal has a valid name and species
    if (!newAnimal.name || newAnimal.name.length === 0 || 
        !newAnimal.species || newAnimal.species.length === 0) {
      return; // Do nothing if the validation fails
    }
  
    // Check if the name is unique
    for (let i = 0; i < animals.length; i++) {
      if (animals[i].name === newAnimal.name) {
        return; // Do nothing if a duplicate name is found
      }
    }
  
    // If all checks pass, add the new animal to the array
    animals.push(newAnimal);
  }
  

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
}