// Immediately Invoken Function Expressions (IIFE)
// Global Scoper K Pollution Se Bachny K Lye IIFE Use Krty Han |--<<Interview>>--|
// (Use For Function Definiton)(Use For Function Execution)
(function lapi () {
    // named IIFE |--<<Interview>>--|
    console.log("Database Connected");
    
}) ();                                                     //Always use  ";" after IIFE Function otherwise next function will not work

// Arrow Function In IIFE
( (name) => {
    //no name IIFE |--<<Interview>>--|
    console.log(`${name}, Database Connected Successfully!`);
    
}) ("Tally");


let val1 = 10
let val2 = 25

function addVal (num1, num2) {
    let total = num1 + num2
    return total
}
let result = addVal(val1, val2)
let result1 = addVal(10, 15)     // will overrdie values
console.log(result);
console.log(result1);

