// Dates

let currentDate = new Date()                     // date instance/object created
console.log(currentDate);                        // show date in other format
console.log(currentDate.toString());             // Fri Jan 16 2026 04:28:45 GMT-0800 (Pacific Standard Time)
console.log(currentDate.toDateString());         // Fri Jan 16 2026
console.log(currentDate.toLocaleDateString());   // 1/16/2026
console.log(currentDate.toLocaleString());       // 1/16/2026, 4:28:45 AM
console.log(currentDate.toISOString());          // 2026-01-16T12:30:43.304Z
console.log(currentDate.toJSON());               // 2026-01-16T12:31:12.741Z
console.log(currentDate.toTimeString());         // 04:32:03 GMT-0800 (Pacific Standard Time)

console.log(typeof currentDate);                 // It's an Object |--<<Interview>>--|


let newDate = new Date(2026, 0 , 17)             // month starts from 0 in java
console.log(newDate.toDateString());

let newDateDec = new Date(2026, 0, 17, 9, 1)             
console.log(newDateDec.toLocaleString());

let newDateDeclaration = new Date("01-17-2026")             
console.log(newDateDeclaration.toLocaleString());           // moth always starts with 1 in mm-dd-yy format

let timeStamp = Date.now();                                 // use for poll system
console.log(timeStamp);
console.log(newDateDeclaration.getTime());                  // getTime() is used to compare with that days
console.log(Date.now());                                    // gives current date in milliseconds
console.log(Date.now()/1000);                               // so thats why we divide with 1000
console.log(Math.floor(Date.now()/1000));                   // for concise and exact value we use floor()


/*-----------------Methods To Use With Date-----------------*/
let newDate1 = new Date()
console.log(newDate1);
console.log(newDate1.getFullYear());
console.log(newDate1.getMonth());                           // it gives '0' as output
console.log(newDate1.getDay());                             // from monday to sunday so it's 6
console.log(newDate1.getHours());
console.log(newDate1.getMinutes());
console.log(newDate1.getSeconds());
console.log(newDate1.getMilliseconds());
console.log(newDate1.getTimezoneOffset());
console.log(newDate1.getTime());





 







