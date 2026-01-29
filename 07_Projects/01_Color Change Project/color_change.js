const buttons = document.querySelectorAll(".button")
// console.log(buttons);
const body = document.querySelector("body")

// we got nodelist do i can use foreach()

buttons.forEach( function(button){
    console.log(button);

    button.addEventListener('click', function(e){            // this is event and function inside an event
        console.log(e);
        // console.log(e.target);                               // by clicking you can know which button is pressed
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id
        }
        
        
    })
    
} )

// setInterval is use to set Intervals using Array
const spanTextChange = document.querySelector(".h2-text span")
//let us set loop on it using fucntion
const colorsToChange = ["red", "green", "orange", "pink", "brown"]

let i = 0;
setInterval( () => {
    spanTextChange.style.color = colorsToChange[i];
    i++;

    if (i === colorsToChange.length) {
        i = 0;
    }
}, 3000)
