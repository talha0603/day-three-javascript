// Reduce Method
// Adds the current value in current number of array
// Used in calculating shopping cart items
// You can use for loop, while & do-while, forof, forin

const arrNumber = [1, 2, 3, 4, 5]

const IntVal = 0
// const reduceMethod = arrNumber.reduce ( (acc, currVal) => {
//    console.log(`current value in acc is: ${acc} and currVal in adn array is: ${currVal}`);          // check acc & currVal functioning
//    console.log(`Sum that's Stored is: ${acc + currVal}`);
//    return acc + currVal
//    // after return no statement will work
//    
// }, 0 )                                                                                               // give any value here 0,1,2,3,4,...

const reduceMethod = arrNumber.reduce ( (acc, currVal) => acc + currVal ,0 )

console.log(`Total = ${reduceMethod}`);



// Example Of Reduce Method Using Database

const cartArray = [
    {
        productName: "Samsung Galaxy A10 Pro",
        productPrice: 79999,
    },
    {
        productName: "HP Folio 9480m Thin Book",
        productPrice: 90000,
    },
    {
        productName: "IPhone Charger",
        productPrice: 15350,
    },
    {
        productName: "Power Bank 20000mAH",
        productPrice: 13900,
    },
    {
        productName: "Laptop Extendable Bag",
        productPrice: 2999,
    },
    {
        productName: "Mobile Cover",
        productPrice: 299,
    },
]

const cartTotal = cartArray.reduce ( (acc, cartItems) => acc + cartItems.productPrice , 0 )

console.log(cartTotal);
