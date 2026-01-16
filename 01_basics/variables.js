// To Declare Variable We Can Use "var" as well as "let".
// To Declare Constant we only use "const".
// This is called "{}" scope.
const accountId = 1122334455        // accountId = 3344566   ---- It says you cannot change const value once you've declared
let accountEmail = "helloworld@gmai.com"
var accountPassword = "12345"
accountCity = "Sargodha"
let accountState;

accountEmail = "talhamakhdoom@gmail.com"  //we can override it easily with the last one
accountPassword = "009978"                //we can override it easily with the last one
accountCity = "Srgodha, Punjab"           //we can override it easily with the last one

/*
Prefer Not To Use var 
because it cause problems in block or functional scope
*/

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail,  accountPassword, accountCity, accountState])



