const btnSave = document.querySelector('.profile-button')
function saveProfileName() {
    const valOfFname = document.querySelector('.fname__input').value;
    const valOfSname = document.querySelector('.sname__input').value
    localStorage.setItem('name', valOfFname)
    localStorage.setItem('surname', valOfSname)
}


btnSave.addEventListener('click', () => {
    saveProfileName();
})
