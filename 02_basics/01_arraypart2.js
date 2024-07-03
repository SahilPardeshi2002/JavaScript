const marvelHeroes = ['Thor','Iron-Man','Captain America'];
const dcHeroes = ['Batman','Superman','Flash'];


// marvelHeroes[0] = "Hulk";
// console.log(marvelHeroes);
/* Lets try to print / hold two arrays at once */

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);                  // This Creates 2D Arrays..Push another array in present one

/* When we push another array in present array, it gives us 2D arrays.*/

// marvelHeroes.concat(dcHeroes);
// console.log(marvelHeroes);               // Results the same

/*Note - when we concat two arrays it returns a new array */

const allHeroes = marvelHeroes.concat(dcHeroes);       //Here we hold the returned array 
console.log(allHeroes);

/* To perform this operation we use spread operator */
/* Spread Operator -  Syntax (...object);
    - It gives us the spreaded values of the object
    - Provides individual values of the array
    - The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
    - It is always used in combination with destructuring
*/

const all_new_heroes = [...marvelHeroes, ...dcHeroes];
console.log(all_new_heroes);

/* If we want to combine all the nested array elements into single array then use flat*/

const arrayElements = [1,2,3,4,[5,6],7,8,[11,[9,10]],12];
const newArrayElements =  arrayElements.flat(Infinity);
console.log(newArrayElements);

/* If we want to create array from any elements we use Array object */

console.log(Array.isArray("Sahil")); 
const array = Array.from("Sahil")
console.log(array);

/* if we want to combine different elements into single array then use of() */
let element1 = "sahil";
let element2 = "sanchit";
let element3 = "pranay";

console.log(Array.of(element1,element2,element3));



