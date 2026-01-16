//-------------Sama DataType, No Problem!--------------
//console.log(2 < 1);
//console.log(2 > 1);
//console.log(2 >= 1);
//console.log(2 <= 1);
//console.log(2 == 1);
//console.log(2 != 1);

//-------------Different DataType On Both Sides, Creates Problem!--------------
//console.log("2" > 1);
//console.log("02" > 1); 

//-------------Avoid Using These Conversions, Always Creates Problem/Confusion--------------
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);  // It's true
console.log(null < 0);
console.log(null <= 0);  // It's true

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined != 0); // It's true


// ===
console.log("02" === 2);


