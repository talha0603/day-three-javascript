//const shortCut = ["html", "css", "js", "react"]

//const valInArr = shortCut.forEach( (val1) => {                    // stored in variable
//    console.log(val1);
//    //return val1                                                   // foreach does not return any value
//} )
//
//console.log(valInArr);                                            // return undefined


// filter operation
// in filter we must give condition and it returns value in array as foreach foes not return
// if we write command in {} then it gives empty [], must write return in curly braces

const anyNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNumber = anyNumers.filter( (num) => num > 5 )
//const newNumber = anyNumers.filter( (num) => {
//    return num > 5
//} )

const newNum = []                                           // we're pushing values in empty array
anyNumers.forEach ( (num) => {
    if (num >= 8) {
        newNum.push(num)
    }
} ) 
console.log(newNum);


// Example Of Database

const booksData = [
    {book: "Book One", genre: "Fiction", publish: 1975, edition: 2000 },
    {book: "Book Two", genre: "Fantasy", publish: 1980, edition: 2002 },
    {book: "Book Three", genre: "Action", publish: 1983, edition: 2008 },
    {book: "Book Four", genre: "Comedy", publish: 1989, edition: 2008 },
    {book: "Book Five", genre: "Romance", publish: 1995, edition: 2010 },
    {book: "Book Six", genre: "Fiction", publish: 1997, edition: 2015 },
    {book: "Book Seven", genre: "Comedy", publish: 1998, edition: 2020 },
    {book: "Book Eight", genre: "Fantasy", publish: 1999, edition: 2025 },
]

let userBooks = booksData.filter( (bk) => bk.genre === "Comedy" )

userBooks = booksData.filter( (bk) => { return bk.edition >= 2000 && bk.genre === "Romance" } )

console.log(userBooks);

