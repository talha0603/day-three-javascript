// document.getElementById('time')
const clockTime = document.querySelector('#time')

setInterval( function(){                               // use to run every 1 second
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clockTime.innerHTML = date.toLocaleTimeString()
}, 1000)
