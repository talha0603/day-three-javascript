
const marvel_heroes = ["Thor", "Spiderman", "Arrow"]
const dc_heroes = ["Superman", "Flash", "Robin Hood"]

//marvel_heroes.push(dc_heroes)                            // it will never merge, but take as value to insert
//console.log(marvel_heroes);
//console.log(marvel_heroes[3][2]);

const combined_heroes = marvel_heroes.concat(dc_heroes)   // it merges and gives new array
console.log(combined_heroes);

// OR

const all_heroes = [...marvel_heroes, ...dc_heroes]       // ... is used to 'spread' like concat does
console.log(all_heroes);




/*------------------------------------------------------------------------------*/

// flat() deals with the arrays in arrays and sort them in one array
const newArray = [1, 2, 3, 4, [5, 6, 7], 5, 6, 7, [8, 9, 10, 11,[12, 14, 14, 15,[16, 17, 18]]]]

const another_newArray = newArray.flat(Infinity)
console.log(another_newArray);








// convert objects, data, values in arrays easily

console.log(Array.isArray("Talha"));                                // asking is aarray?, returns false
console.log(Array.from("Talha"));                                   // we made array
console.log(Array.from('0948746'));                                 // use 'from'
console.log(Array.from({name: "Talha Makhdoom"}));                  // gives empty array [], can't convert
console.log(Array.from([2, 4, 6]));



let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1, score2, score3, score4));             // used 'of' instead of 'from'\
console.log(Array(7));                                             // creates empty spaces in array

