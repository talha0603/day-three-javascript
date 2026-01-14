// Primitive (Call By Value)
// 7 types = String, Number, Boolean, Null, Undefined, Symbol, BigInt

const marks = 90
const percentage = 90.00

let isLoggedIn = false
let tempOutside = null
let userEmail;

let id = Symbol('0101')
let newId = Symbol('0101')
const bigNumber = 93745864647747n

console.log(id === newId);


// Non-Primitive/Reference
// 3 types = Arrays, Objects, Functions

const fruits = ["Aplle","Mango", "Banana", "Grapes", "PineApples"];

let myObj = {
    name: "M Talha Makhdoom",
    age: 22,
    email: "talhamakhdoom305@gmail.com",
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof marks);
console.log(typeof tempOutside);
console.log(typeof fruits);
console.log(typeof userEmail);
console.log(typeof Symbol);
console.log(typeof isLoggedIn);
console.log(typeof myFunction);

