// posttype & gettype ---> form submit methods |--<<Interview>>--|

const formType = document.querySelector('form')
formType.addEventListener('submit', function (e) {
    e.preventDefault()                                            // provoked the current working

    
    // we want values when we click on calculate , not when page refreshes. offcourse we want values so we have to call in the form
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
    result.innerHTML = `Please give a valid height`;
    
     }
    else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = `Please give a valid weight`;
     }
    else {
    const BMI = weight / ((height*height)/10000);
    const BMIrounded = BMI.toFixed(2);
    result.innerHTML = `<span>${BMIrounded}</span>`;
}
})