const firstName = document.querySelector('.name_placeholder');
const lastName = document.querySelector('.last__name_placeholder');
const email = document.querySelector('.email_placeholder')
const btnSave = document.querySelector('.profile-button');

window.onload = function () {
    const lastNameOnLoad = document.querySelector('.last__name_placeholder');
    const name = window.localStorage.getItem('name');
    console.log(name)
    const lastName = window.localStorage.getItem('last_name');
    console.log(lastName)
    if (name || lastName) {
        firstName.innerHTML = name;
        lastNameOnLoad.innerHTML = lastName;
    }
}



btnSave.addEventListener('click', () => {
    const fNameInputVal = document.querySelector('.fname__input').value;
    const sNameInputVal = document.querySelector('.sname__input').value;
    const emailInputVal = document.querySelector('.email__input').value;
    if (fNameInputVal) {
        firstName.innerHTML = fNameInputVal
        window.localStorage.setItem('name', fNameInputVal)
    }
    if (sNameInputVal) {
        lastName.innerHTML = sNameInputVal
        window.localStorage.setItem('last_name', sNameInputVal)
    }
    if (emailInputVal) {
        email.innerHTML = emailInputVal;
    }
    if (fNameInputVal && sNameInputVal && emailInputVal) {
        firstName.innerHTML = fNameInputVal;
        lastName.innerHTML = sNameInputVal;
        email.innerHTML = emailInputVal;
        window.localStorage.setItem('name', fNameInputVal)
        window.localStorage.setItem('last_name', sNameInputVal)
    }
} )
