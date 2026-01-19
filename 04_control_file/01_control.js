// Talking About Control Flow

// 1. if : if (condition) {}
const todayTemp = 25
const isLoggedIn = true

if (todayTemp > 30) {
    console.log(`Todays Temperature is ${todayTemp}`);
}
else {
    console.log("Temperature is More Than 30");
}



// scope in if, else
//const score = 150
//
//if (score > 100) {
//    let userPower = "fly"
//    console.log(`User Powe is: ${userPower}`);
//    
//}
//console.log(`User Powe is: ${userPower}`);                  // gives error because userPower declared in scope not globally



// Nested if, else
const money = 1000
//if (money > 500) console.log("Executed"),                     // implicit scope      |--<<Interview>>--|
//console.log("Success");                                       // using  ',' you can print many values but scope will remain same. don't do this

if (money < 500) {
    console.log("Money is less than 500");
    
}
else if (money < 750) {
    console.log("Money is less than 750");
    
}
else if (money < 900) {
    console.log("Money is less than 900");
    
}
else {
    console.log("Money is less than 1500");
    
}


//Another Example

const userLoggedIn = true
const debitCard = true
const loggedFromGoogle = false
const loggedFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allowed for Shopping");
    
}

if (loggedFromGoogle || loggedFromEmail) {
    console.log("User Logged In");
    
}

