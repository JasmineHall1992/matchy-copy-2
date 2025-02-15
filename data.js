/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable named animal and assign it to an empty object
var animal = {};
animal.species = "dog";
animal['name'] = "Luke";
animal.noises = [];
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "bark";
noises.push("yelp");
noises.unshift("woof");
noises[noises.length] = "howl";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//assign the noises property on animal
animal["noises"] = noises;
animal.noises.push("whine");
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *    1. Dot Notation and Bracket Notation and Destructuring
 *
 * 2. What are the different ways of accessing elements on arrays?
 *    2. Dot and Bracket Notation and Array Methods
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']};
animals.push(duck);
console.log(animals);
var horse = { species: 'horse', name: 'Seabiscuit', noises: ['whiney', 'neigh']};
animals.push(horse);
var frog = { species: 'frog', name: 'Tiana', noises: ["ribbit", "gulp"]};
animals.push(frog);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//An array would be the best method because it holds lists of objects
var friends = [];

function getRandom(array) {
  return Math.floor(Math.random() * array.length);
}
//make a random index by using function on animals array
let randomIndex = getRandom(animals);
//get the name of the animal at the random index
let randomAnimal = animals[randomIndex].name;
//push the random name into the friends array
friends.push(randomAnimal);
//console log
console.log(friends);
//add friends list as a property named friends on one of the animals in the animals array
let newProperty = animals[1]['friends'] = friends;
//console.log my work
console.log(newProperty);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}