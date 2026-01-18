

function sayMyName() {
    console.log("T");
    console.log("A");
    console.log("L");
    console.log("H");
    console.log("A");
}
//sayMyName()                                    // reference is "sayMyName" & execution uses "()"


//function addingNumbers(num1, num2) {
//    console.log(num1 + num2);
//    
//}

function addingNumbers(num1, num2) {
    //let result = num1 + num2                                           // before return console is reachable
    //console.log("Time End!");
    return num1 + num2                                                   // return value can be save in variable
    //console.log("Time End!");                                          // after return console is unreachable
    
}
//console.log(addingNumbers(4, 4));

const result = addingNumbers(3, 3)
console.log("Result is: ", result);



function loginUserMessage(username) {
    if(!username) {
        console.log("Please Enter Your Name");
        return                                           // if i write return here then next return will never work
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Makhdoom"));
console.log(loginUserMessage());                         // if you don;t pass value then undefined just logged in""

//const message = loginUserMessage("Talha")
//console.log(message);



/*----------------------------------------------------------------------*/

//fucntion
function cartItemsPrice (val1, val2, ...num3) {                               // .... is called rest or spread operator, used to add rest of values as an Array
    return num3
}
console.log(cartItemsPrice(200, 400, 600, 800, 1000));


// pass object to a function
const user = {
    name: "Khanum",
    price: 199,
}
function userFunction(anyuser) {
    console.log(`Username is ${anyuser.name} and Course Price is ${anyuser.price}`);
     
}
//userFunction(user);                                                // passing user as an argument of parameter
userFunction({
    name: "Kamaal Khan",
    price: 499,
})


// passarray to a function
const myArr = [100, 300, 500, 700, 900, 1100]

function usingArray(carryArray) {
    return carryArray[4]
}
//console.log(usingArray(myArr));
console.log(usingArray([100, 300, 500, 700, 900, 1100]));

