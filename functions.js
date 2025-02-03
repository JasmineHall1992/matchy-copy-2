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
function search(animals, name){
    for (let i = 0; i < animals.length; i++){
        if (animals[i].name.toLowerCase() === name.toLowerCase()){
            return animals[i];
        } 
    }
            return null;        
    }



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an array of animals, a string representing the name of an animal, an Object to replace animal
//O: if the name exists within the araym replace the object with replacement object
function replace(animals, name, replacement){
    //loop through the array
    for (let i = 0; i < animals.length; i++){
        if (animals[i].name.toLowerCase() === name.toLowerCase() ){
            //replace the animal object with the replacement object
            animals[i] = replacement;
            return;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



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