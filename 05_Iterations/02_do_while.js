let number = 1                                           // use let instead of const
while (number <= 9) {
    console.log(`Value of number is: ${number}`);
    //number++
    number = number + 2
}


// while using Array

const myArr = ["Superman", "Batman", "Flash", "Thor", "Classic Hulk"]

let arr = 0
while (arr < myArr.length) {
    console.log(`Value of Array is: ${myArr[arr]}}`);
    arr++
    // arr = arr + 1
}


// do while loop
let stats = 0                        // if stats = 110 then it prints 110 only because it runs body first then checks condition

do {
    console.log(stats);
    stats = stats + 10
    
} while (stats <= 100);