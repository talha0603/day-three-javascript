// Two Ways To Declare Objects: 1.(Literal) & 2.(Constructor)

//singleton : Constructor se singleton bany ga.Literal se nahi
//object.create --> constructor


/*--------------(1.Object Literals)----------------*/

const mySym = Symbol("key1")                                           // Symbol Created Successfully

const jsUser = {
    //key: value,
    name: "M Talha Makhdoom",
    "full name": "M Talha Mushtaq Makhdoom",
    age: 23,
    [mySym]: "myKey1",                                          // always use access symbol using []. Gives: Symbol(key1): 'myKey1' |--<<Interview>>--|
    location: "Bashir Colony, Sargodha",
    email: "talha@google.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday" , "Saturday"],
}

console.log(jsUser.name);                                       // use either this or that, both same
// OR
console.log(jsUser["name"]);                                    // because it takes keys as "string"
console.log(jsUser["full name"]);                               // if you try to use '.' here you cannot 
console.log(jsUser[mySym]);

// if you wanna change (override) value of any particular key then
jsUser.email = "talha@chatgpt.com"
jsUser.name = "Talha"
//Object.freeze(jsUser);                                         // froze the last value, no chnages can be made after

jsUser.email = "talha@whatsapp.com"                            // change does not happend
jsUser.name = "M Talha"
console.log(jsUser);


// function in Object
jsUser.greetings = function(){
    console.log("Welcome! Glad To See You Again.");
    
}
jsUser.greetingsOne = function(){
    console.log(`How are you, ${this.name}`);                    // 'this' is used to access object properties. |--<<Interview>>--|
    
}

console.log(jsUser.greetings());
console.log(jsUser.greetingsOne());




// in objects, keys can also be accessed using '.', but good method is to access with brackets []
// key as a string in object can be accessed only with brackets [], not '.'
// symbol is defined as a key using brackets [] and accessed with brackets  [], not '.'