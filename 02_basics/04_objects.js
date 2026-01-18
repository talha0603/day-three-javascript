// Singelton Object |--<<Interview>>--|

const whatUser = new Object()                        //Constructor Method
console.log(whatUser);


// Non-Singelton Object |--<<Interview>>--|

const faceUser = {}
faceUser.name = "Khan"
faceUser.id = "13985hf8"
faceUser.isLoggedIn = false

//console.log(faceUser);


const instsUser = {
    email: "me@intsa.com",
    fullname: {
        username:{
            firstname: "M Talha",
            lastname: "Makhdoom",
        }
    },
}

console.log(instsUser.fullname.username.firstname);
console.log(instsUser.fullname.username.lastname);




/*--------------Combine Objects (Same as Arrays)--------------*/

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {...obj1, ...obj2}                                  // It's the main tool to use for combining
console.log(obj3);
// OR
const obj4 = Object.assign({}, obj1, obj2)                       // assign() helps to combine multiple objects
console.log(obj4);



/*---------------Take Object Keys & Values As Arrays-------------*/

const newInsta = {
    name: 234,
    email: "khan244@gmailcom",
    isLoggedIn: false
}

console.log(newInsta);
console.log(Object.keys(newInsta));                            // Object.keys() returns: [ 'name', 'email', 'isLoggedIn' ]
console.log(Object.values(newInsta));                          // Object.keys() returns: [ 234, 'khan244@gmailcom', false ]
console.log(Object.entries(newInsta));                         // Object.entries() returns: [ 'name', 234 ], [ 'email', 'khan244@gmailcom' ], [ 'isLoggedIn', false ]

console.log(newInsta.hasOwnProperty('id'));                    // check if Object is having this value or not



// It will work when you're dealing with databases
// you're always given data in databases as Array Of Objects, For Example

/* const users = [
    {
       id: 1
       email: "hello@email.com"
    },
    {
       id: 1
       email: "hello@email.com"
    },
    {
       id: 1
       email: "hello@email.com"
    }
] */






/*-------------Object De_Structure------------*/

const course = {
    courseName: "JavaScript",
    courseTeacher: "M Talha Makhdoom",
    coursePrice: "Rs/- 1000"
}

//console.log(course.courseName);
// OR

const {courseTeacher: teacher} = course                          // that is de-structurer syntax
//console.log(courseTeacher);                                    // we assign a short name to access that element
console.log(teacher);                                            // de-structuring always happens in the curly braces{}






/*-------------API Calling------------*/


//++++++++++++++++++++++++++++++(--JSON as Objects--)++++++++++++++++++++++++++++++++++++                         
//                                                                                      |
//                           {                                                          |
//                               "username": "talha0603"                                |   
//                               "name": "github"                                       |
//                               "email": "gremii.gremii003@gmail.com"                  | 
//                           }                                                          |
//---------------------------------------------------------------------------------------



//++++++++++++++++++++++++++++++(--JSON as Objects within Arrays--)+++++++++++++++++++++++++++++++++

[
    {},
    {},
    {},
    {}
]