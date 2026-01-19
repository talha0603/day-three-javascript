//  for

//for (let index = 0; index < array.length; index++) {
//    const element = array[index];
//    
//}

// for using if inside
for (let counting = 0; counting < 10; counting++) {
    const value = counting;
    if(value == 3) {
        //console.log("My Favorite Number");
        
    }
    if(value == 6) {
        //console.log("My Favorite Number");
        
    }
    //console.log(value);
    
    
}


// Nested for loop

for (let inCount = 1; inCount <= 10; inCount++) {
    //console.log(`Inner Loop is: ${inCount}`);
    
    for (let outCount = 1; outCount <= 10; outCount++) {
        //console.log(`Outer Loop is: ${outCount} and Inner Loop is: ${inCount}`);
        //console.log(inCount + '*' + outCount + "=" + inCount*outCount);
        
    }
    
}

// Example using Array

const arrHero = ["Superman", "Batman", "Flash", "Thor", "Classic Hulk"]
console.log(arrHero.length);


for (let arrCount = 0; arrCount < arrHero.length; arrCount++) {
     const store = arrHero[arrCount];
     console.log(store);
     
}


// break and continue
// break on specific number
for (let i = 1; i <= 20; i++) {
    
    if(i == 6){
        console.log(`Number ${i} Detected Successfully!`);
        break;                                                   // continue skips value and print all values except this one
    }
    console.log(`Value is: ${i}`);
    
}

for (let i = 1; i <= 20; i++) {
    
    if(i == 6){
        console.log(`Number ${i} Detected Successfully!`);
        continue                                                // continue skips value and print all values except this one
    }
    console.log(`Value is: ${i}`);
    
}