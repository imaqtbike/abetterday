const btnLogin = document.querySelector('#login__button')
const btnReg = document.querySelector('#signup__button')

///// LOGIN SECTION
function onLogin() {
    const userValue = document.querySelector('.user__field').value;
    const pass = document.querySelector('.password__field').value;
    if (userValue && pass) {
        location.href ='./profile.html'
    }
    else {
        alert ("Login was unsuccessful, please check your username and password");
        return false;
    }
}


function onSignUp() {
    console.log('hello')
    const userValue = document.querySelector('.email__field').value;
    const pass = document.querySelector('.password__field__signup').value;
    const passConfirm = document.querySelector('.password__field__signup-confirm').value;
    if (userValue && pass && passConfirm) {
        location.href ='./profile.html'
    }
    else {
        alert ("Login was unsuccessful, please check your username and password");
        return false;
    }
}

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    onLogin();
})
btnReg.addEventListener('click', (e) => {
    e.preventDefault()
    onSignUp();
})
//// END SECTION
