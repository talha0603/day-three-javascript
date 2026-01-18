// this in object
const user = {
    username: "M Talha Makhdoom",
    password: 947856,
    price: 1099,

    welcomeMessage: function() {
        console.log(`Hey ${this.username}, Welcome Back! Glad To See You.`);
        //console.log(this);                                         // tells about current context or object values in it
        
        
    }
}

user.welcomeMessage()
user.username = "Tally"
user.welcomeMessage()
// gloal object in browser is "Window" |--<<Interview>>--|
console.log(this);                                                  // because there is no context outside, give '{}'


// this in function
// Syntax 1
function hello () {
    let username = "Hakeem"
    console.log(this.username);                                    // gives undefined. this does not work in function
    
}
hello()

// Syntax 2
const useCase = function myFunction () {
    let username = "Hakeem"
    console.log(this.username);                                   // gives undefined. this does not work in function
}
useCase()

// Arrow in Syntax 2
const arrowFunction = () => {                                     //  we use "=>" this and removes function but parenthesis remain there
    let username = "Hakeem"
    console.log(this.username);                                   // gives undefined. this does not work in function
}
arrowFunction()


// Arrow Function Syntax: () => {}
const arrowFun = (num1, num2) => {                                // this is explicit means when using return with {}
    return num1 + num2
}
arrowFun(5, 5)    //return but don't show
console.log(arrowFun(5, 5));


// Arrow Function Using implicit Return
//const arrowFunct = (num1, num2) =>  num1 + num2
//const arrowFunct = (num1, num2) =>  (num1 + num2)                           // do not use return with implicit. use return with {} and do not use return with ()
const arrowFunct = (num1, num2) =>  ({name: "M Talha Makhdoom"})

arrowFunct(5, 5)    //return but don't show
console.log(arrowFunct(5, 7));