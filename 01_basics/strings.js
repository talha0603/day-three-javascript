const name = "Talha Makhdoom"
const repoCount = 5

// console.log(name + repoCount + "files");           //Outdated & Old Style

console.log(`Hi! My name is ${name} adn my total repositories are ${repoCount}`); // Backtick is Modern & Readable


// Another String Declaration Way. It's adn 'Object'

const newGame = new String('M-Talha-Makhdoom')
const newGame1 = new String('M Talha Makhdoom')

console.log(newGame[1]);
console.log(newGame.__proto__); // gives '{it's having values, not empty}'

console.log(newGame.length);
console.log(newGame.toUpperCase());
console.log(newGame.charAt('3'));         // either use (3) or ('3') is acceptable
console.log(newGame.charCodeAt('4'));     // tell charachter code
console.log(newGame.codePointAt('2'));
console.log(newGame.indexOf('h'));        // must define in ('h'), not (h)

const newString = newGame.substring(0,7)  // last value is not included. It's calling only these index values 0 to 7 or whatever
console.log(newString);

const anotherString = newGame.slice(-12,8) // negative values can be used
console.log(anotherString);

const newStringOne =  "      My World     "
console.log(newStringOne);
console.log(newStringOne.trimStart());  // use to trim white-spaces
//console.log(newStringOne.trimEnd());

const url = "https://talha.com/talha%20makhdoom"
console.log(url.replace('%20', '-'));   // replace something into something


// includes()
console.log(url.includes('makhdoom'));  // can find name in url
console.log(url.includes('%20'));
console.log(url.includes('saleem'));


// Converting String Into Array
console.log(newGame.split('-'));  // checked for '-'
console.log(newGame1.split(' ')); // checked for 'space'


//anchor()
console.log(newGame.anchor('talha'));


// at()
const arrayFood = ["Chicken Karahi", "White Karahi", "Lahori Handi", "Pasta", "Malai Boti"];
console.log(arrayFood.at('-2'));


// big()
const ramaAka = "Hello , world"
console.log(ramaAka.big(''));
console.log(ramaAka.blink("Hello , world"));
console.log(ramaAka.bold("Hello , world"));


// concat()
const nameOne = "My name is "
const nameTwo = "Talha Makhdoom"
console.log(nameOne.concat('', nameTwo));
console.log(nameTwo.concat(nameOne ,''));


// endsWith()
const nameThree = "Cats are the best!"
console.log(nameThree.endsWith("best!"));     // predicts if text end is true or false
console.log(nameThree.endsWith("best", 17));

const nameFour = "Is this a question?"
console.log(nameFour.endsWith("question"));


// startssWith()
console.log(nameThree.startsWith("Cats"));
console.log(nameThree.startsWith("cats"));
console.log(nameThree.startsWith("Cats", 0));
console.log(nameThree.startsWith("cats", 0));


// fontColor()
const nameFive = "My Color Is Red"
console.log(nameFive.fontcolor('red'));


// lastIndesOf()
const nameSix = "My dog reze is a very nice dog"
const nameSeven = "dog"
console.log(`Index Of The Last ${nameSeven} is ${nameSix.lastIndexOf(nameSeven)}`);


// valueOf()
const nameEight = new String("Let us end this together!") // show the value in string
console.log(nameEight);
console.log(nameEight.valueOf());


// toUpperCase
const nameNine = "this string is converted into upper case letters"
console.log(nameNine);
console.log(nameNine.toUpperCase());


// toLowerCase
const nameTen = "THIS STRING IS CONVERTED INTO LOWER CASE LETTERS"
console.log(nameTen);
console.log(nameTen.toLowerCase());


// toString()
const nameEleven = "Suuu!"
console.log(nameEleven);
console.log(nameEleven.toString());


// toLocalUpperCase()
const nameTwelve = "Germany"
console.log(nameTwelve.toLocaleUpperCase("en-US"));
console.log(nameTwelve.toLocaleUpperCase("TR"));


// toLocalLowerCase()
const nameThirteen = "Istanbul"
console.log(nameThirteen.toLocaleLowerCase("en-US"));
console.log(nameThirteen.toLocaleLowerCase("tr"));


// search()
const nameForteen = "Everyone looks beautiful and no one is ugly in this world!";
const regex3 = /[^\w\s']/g;
console.log(nameForteen.search(regex3));                // it is used to find length of text before special charachter
console.log(nameForteen[nameForteen.search(regex3)]);   // it finds special charachter in current paragraph


// replace()
const nameSixteen = "I think Ruth's dog is cuter than your dog!"
console.log(nameSixteen.replace("Ruth's" , "Talha's"));

const regex2 = /dog/gi;
console.log(nameSixteen.replace(regex2 , "pet"));



// replaceAll()
const nameFifteen = "I think Ruth's dog is cuter than your dog!"
console.log(nameFifteen.replaceAll("dog" , "monkey"));

const regex1 = /dog/gi;
console.log(nameFifteen.replaceAll(regex1, "cat"));


// repeat()
const mood = "Excited! "
console.log(`Today, I Feel ${mood.repeat(3)}`);


// padStart()
const nameSeventeen = "6"
console.log(nameSeventeen.padStart(3 , "*"));  // you can masked your numbers

const myNumber = "03227747946"
const lastDigits = myNumber.slice(-3)
const maskedNumber = lastDigits.padStart(myNumber.length, "*")

console.log(maskedNumber);


// padEnd()
console.log(nameSeventeen.padEnd(10 , "*"));

const newVal = "234"
console.log(newVal.padEnd(5));


// match()
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);     // finds the Very First UpperCase Of Sentence  

console.log(found);

