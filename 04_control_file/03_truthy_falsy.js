// falsy values in JS
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values in Js
// "0", [], "false", 'false', " ", {}, function(){}, 


const userEmail = ""
if (userEmail) {
    console.log("We Caught an Email Up");
    
}
else {
    console.log("User Does Not Exist");
    
}


// check if array is empty
const arr = []
if (arr.length === 0) {                                           // use arr.length
    console.log("Array is Empty!");
    
}

// check object is empty
const chkObject = {}
if (Object.keys(chkObject).length === 0) {                       // use Object.keys(variable).length
    console.log("Object is Empty!");
    
}



// 1. Nullish Coalescing Operatin (??):  (Based On 2 Keywords) --> Null & Undefined

let val1;
// val1 = 10 ?? 15                                         // 10 (first assign value)
// val1 = null ?? 15                                       // 15 (first assign value)
// val1 = undefined ?? 15                                  // 15 (first assign value)
val1 = null ?? 10 ?? 20                                   // 10 (first assign value)

console.log(val1);



// 2. Terniary Operator

// condition ? true : false   OR condition ? value_if_true : value_if_false

const mangoPricePerKg = 250
mangoPricePerKg <= 200 ? console.log("Yes, price is less than 200") : console.log("No, price is more than 200");

