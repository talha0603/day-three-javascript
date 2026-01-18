// '{}' is called Scope                                // global scope is different in console of web and different in code that runs inside editor |--<<Interview>>--|

//let c = 300                                       //Global Scope, Available inside Block.
let a = 100 
if (true) {                                       // Block Scope, Must Not Available Outside.
    let a = 10
    const b = 20
    console.log("Inner a is having Block value : ", a);
    
}

console.log("Outer a is having Global value: ", a);
//console.log(b);
//console.log(c);                                  // It's the only one printing , it creates problem and scope is not really high



// Accessing function inside a function
function one() {
    let name = "M Talha"

    function two() {
        const website = "youtubecom"
        console.log(name);
        
    }
    //console.log(website);
    
    two()
}
one()                                                     // If one() executs then two() will execute


if (true) {
    let newName = "Talha Makhdoom"
    
    if (newName === "Talha Makhdoom") {
        const newWebsite = " youtube.com"
        console.log(newName + newWebsite);
        
    }
    //console.log(newWebsite);                                 // nor accessible out of range
    
}
//console.log(newName);                                        // nor accessible out of range





//++++++++++++++++++++ Interesting ++++++++++++++++++++
// Syntax 1
console.log( addNum(5));                               
addNum(5);                                                    // It's returning only, not printing
function addNum (num) {
    return num + 1
}

// Syntax 2
console.log(addNum1(5));                                      // giving error beacuse of function declaration type in variable
addNum1(5);                                                    // It's returning only, not printing
const addNum1 = function (num) {
    return num + 2
}
//console.log(addNum1(5));

