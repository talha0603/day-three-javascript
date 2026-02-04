const formOne = document.querySelector('.form1')             // for login --> form 1

formOne.addEventListener('submit', function(e){
    e.preventDefault();


    const loginMail = document.querySelector('#log-mail').value
    const loginPass = document.querySelector('#log-pass').value
    const loginButton = document.querySelector('#login-button')

    const storedEmail = localStorage.getItem('userEmail');              // taking data back from browser
    const storedPassword = localStorage.getItem('userPassword');

    if (!storedEmail || !storedPassword) {
        alert('Please signup first');
        return;
    }
    if (loginMail === '' || loginPass === '') {
        alert('Please fill all fields');
        return;
    }
    if (loginMail === storedEmail && loginPass === storedPassword) {
        alert(`Login successful 🎉`)
    } else {
        alert(`invalid email and password`)
    }
})



const formTwo = document.querySelector('.form2')             // for signup --> form 2

formTwo.addEventListener('submit', function(e){
    e.preventDefault();


    const signupMail = document.querySelector('#sign-mail').value
    const signupPass = document.querySelector('#sign-pass').value
    const signupCnPass = document.querySelector('#sign-pass1').value
    const signupButton = document.querySelector('#signup-button')
    
    if (signupMail === '' || signupPass === '' || signupCnPass === '') {
        alert(`fill all fields`)
        return
    }
    if (signupPass !== signupCnPass) {
        alert(`password must be match`)
        return
    }

    localStorage.setItem('userEmail', signupMail)          // saving data in browser
    localStorage.setItem('userPassword', signupPass)

    alert('Signup successful! Now login.');
    signupButton.value = "Signed Up";

    document.querySelector('.signup-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';

})





/*------------Signup Form Logic-------------*/

const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');

document.querySelector('.span1').addEventListener('click', function () {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

document.querySelector('.span2').addEventListener('click', function () {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
});
