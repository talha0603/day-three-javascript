// Object Iterations Using forin loop

const myObject = {
    html: "Hypertext Markup Language",
    css: "Cascading Style Sheets",
    js: "Javascript",
}

for (const key in myObject) {
    console.log(`${key} this is the abbreviation of: ${myObject[key]}`);
    
}


// Arrays Iterations Using forin loop

const arr = ["html", "css", "js"]

for (const [key] in arr) {
    console.log(arr[key]);
    
}



// Maps using forin
// Maps are not Iterateable using forin loop

const map = new Map()
map.set('PK', 'Pakistan')
map.set('DE', 'Germany')
map.set('UK', 'United Kingdom')
map.set('USA', 'United States Of America')

//console.log(map);

for (const key in map) {
    console.log(key);
    
}