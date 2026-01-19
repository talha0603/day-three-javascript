//switch (key) {
//    case value:
//        
//        break;
//
//    default:
//        break;
//}

const month = 5
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;                                          // if case matched and break is not declared then it will execute rest of code below except default   |--<<Interview>>--|

    default:
        console.log("Nothing Matches Above");
        break;
}

//Example
const day = "Wed"
switch (day) {
    case "Mon":
        console.log("Monday");
        break;
    case "Tue":
        console.log("Tuesday");
        break;
    case "Wed":
        console.log("Wednesday");
        //break;                                          // if case matched and break is not declared then it will execute rest of code below except default   |--<<Interview>>--|
    case "Thu":
        console.log("Thursday");
        break;
    case "Fri":
        console.log("Friday");
        break;                                          
    case "Sat":
        console.log("Saturday");
        break;                                          
    default:
        console.log("Day is Sunday");
        break;
}