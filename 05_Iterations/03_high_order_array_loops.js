// Array using forof
// Array forof takes values with keys and print but forin does not do with arrays
// String In Array ["", "", ""]
// Objects In Array [{}, {}, {}]
const arr = [1, 2, 3, 4, 5]

for (const num1 of arr) {
    console.log(num1);
    
}

const welcomeMessage = "Hello World"

for (const welcom of welcomeMessage) {
    if (welcom == " ") {
        console.log("This is space");
        continue
    }
    console.log(`Each Charachter is: ${welcom}`);
    
}


// Maps --> Object    |--<<Interview>>--|
// Holds Key Values, Remember Your Order, no duplicate values, only unique values
// Maps using forof loop is Iterateable

const map = new Map()
map.set('PK', 'Pakistan')
map.set('DE', 'Germany')
map.set('UK', 'United Kingdom')
map.set('USA', 'United States Of America')

console.log(map);

for (const [key, value] of map) {                     // for de-structuring we use [key, value]
    console.log(key, " : ", value);
    
}