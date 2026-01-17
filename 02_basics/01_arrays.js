/*----------------Arrays---------------*/

// Shalow copy
// Deep copy
// Contains Protypes

const myArr = [1, 2, 3, 4, 5]                      // many dataTypes can be added
console.log(myArr[0]);                              // can access element through index number (0 to so on)

// Second(2nd) Way To Declare Array
const myHeroes = ["Hulk", "Captain America", "Thor", "Groot"]
console.log(myHeroes[3]);

// Third(3rd) Way To Declare Array
const myArr2 = new Array(6, 7, 8, 9, 10)
console.log(myArr2[4]);



/*------------------Array Methods---------------*/

const myArr3 = [1, 2, 3, 4, 5, 6, 7]
myArr3.push(8)
myArr3.push(8)                                                   // push value in array
myArr3.pop()                                                     // pop value in array
myArr3.unshift(9)                                                // put loads on PC and shifts all value from start to forward
myArr3.shift()                                                   // removed value (9) from the start


console.log(myArr3);

console.log(myArr3.includes(8));                                  // asks if value present or not
console.log(myArr3.includes(9));                                  // always give boolean output

console.log(myArr3.indexOf(20));                                 // output is -1 means do not know
console.log(myArr3.indexOf(6));                                  // find index Number of any value

const newArr = myArr3.join()
console.log(myArr3);
console.log(typeof myArr3);                                      // already is an Object

console.log(newArr);
console.log(typeof newArr);                                      // converted into String




// Slice Method (Does not change Array) |--<<Interview>>--|

console.log(`This Is Our Original Array`,"A" , myArr3);          // Original Array: A [1, 2, 3, 4, 5, 6, 7, 8]

const myn1 = myArr3.slice(1,5)                                   
console.log(myn1);                                               // slice value [2, 3, 4, 5]
console.log(`Original Array After Slice`,"B" , myArr3);          // B [1, 2, 3, 4, 5, 6, 7, 8]




// Splice Method (Does change Array) |--<<Interview>>--|

console.log(`This Is Our Original Array`,"A" , myArr3);          // Original Array: A [1, 2, 3, 4, 5, 6, 7, 8]

const myn2 = myArr3.splice(1,5)
console.log(myn2);                                               // splice value [2, 3, 4, 5, 6]
console.log(`Original Array After Splice`,"C" , myArr3);         // C [1, 4, 7, 8]












