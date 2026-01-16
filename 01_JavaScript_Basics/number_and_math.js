// First Number
const marks = 1022
console.log(marks);

// Another Number
const leftMoney = new Number(30000)
console.log(leftMoney);

// convert number to string
console.log(leftMoney.toString())      // convert number to string
console.log(leftMoney.toString().length)

// to fix numbers adter decimal
console.log(leftMoney.toFixed(2));     // output is 30000.00 & is precised

// to set precison between '1 to 21'
const newBalance = 4534.674
console.log(newBalance.toPrecision(5)); 

// proper commas to understand
const zeros = 100000
console.log(zeros.toLocaleString('en-In'));



//-------------------------Maths---------------------------//
console.log(Math);

// abs--> negative to postive values only
console.log(Math.abs(-3));

// round--> gives round-of value
console.log(Math.round(3.7));
console.log(`Round Of Value Is ${Math.round(5.8)}`);

// ceil--> choose top value
console.log(Math.ceil(5.1));

// floor--> choose bottom value
console.log(Math.floor(9.9));

// min--> find min value in array
console.log(Math.min(31.2, 45.3, 10.9, 5, 50));

// max--> find max value in array
console.log(Math.max(31.2, 45.3, 10.9, 5, 50));

// random-->
console.log(Math.random());                     // Always give values between 0 and 1
console.log((Math.random()*10) + 1);            // *10 krny se value 0 na ho is lye 1 add kiya. 1 se 9 tk values dy ga
console.log(Math.floor(Math.random()*10) + 1);  // floor se value sirf 1 hi aye gii decimal se pehly waali

// Find Number Between Maximum & Minimum
const min = 20
const max = 30

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // (max - min + 1) is lye ta k range define ho or +1 is lye ta k 0 na ho


 


