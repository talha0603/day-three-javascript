const shortCut = ["html", "css", "js", "react"]

shortCut.forEach( function (val) {                // function does not use name because it's call back function
    console.log(val);
    
} )

shortCut.forEach( (val1, index, arr) => {                    // arrow function
    console.log(val1, index, arr);                           // for each is having many values
    
} )


// Decalre function and then pass it to foreach

function nanoVal (val2) {
    console.log(val2);
    
}

shortCut.forEach(nanoVal)


// Iterations On Objects In Array[{}, {}, {}]

const arrayInObject = [
    {
        codingName: 'Javascript',
        codingShort: '.js'
    },
    {
        codingName: 'Python',
        codingShort: '.py'
    },
    {
        codingName: 'C++',
        codingShort: '.cpp'
    },
]

arrayInObject.forEach( (item) => {
    console.log(item.codingName);
    console.log(item.codingShort);
    
} )