const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = myNumbers.map( (num) => num  + 10 )
//console.log(newNumbers);



// multi map in one with filter

const myNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArray = myNumArray
.map ( (total) => total * 20 )                                  // this map will multiply then send to next
.map ( (total) => total + 10 )                                  // this map will add value in multiplied array values
.filter ( (total) => total > 100 )                              // it will find true condition and show

console.log(newArray);

