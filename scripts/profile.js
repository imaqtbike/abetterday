
const btnPost = document.querySelector('.post__button');
const listItem = document.querySelector('.clone__me')
const btnLogout = document.querySelector('.log_out_btn')

window.onload = function () {
    const lastNameOnLoad = document.querySelector('.last_name');
    const firstNameOnLoad = document.querySelector('.first_name')
    const name = window.localStorage.getItem('name');
    const lastName = window.localStorage.getItem('last_name');
    console.log(lastName)
    if (name || lastName) {
        firstNameOnLoad.innerHTML = name;
        lastNameOnLoad.innerHTML = lastName;
    }
}

btnPost.addEventListener('click', () => {
    const today = new Date();
    console.log (today.getHours())
    const contentVal = document.querySelector('.post__content').value
    if (contentVal) {
    const newPost = listItem.cloneNode(true);
    const postDiv = newPost.querySelector('.timeline-body')
    const statDiv = newPost.querySelector('.timeline-header')
    const timelineTime = newPost.querySelector('.timeline-time')
    const time = timelineTime.querySelector('.time')
    const date = timelineTime.querySelector('.date')
    const postContent = postDiv.querySelector('p')
    const shareVal = postDiv.querySelector('.stats-text')
    const likeVal = postDiv.querySelector('.stats-like')
    const totalVal = postDiv.querySelector('.stats-total')
    const viewVal = statDiv.querySelector('.text-muted')
    const referenceNode = document.querySelector('.clone__me')
    const newNode = newPost
    time.innerHTML = `${today.getHours()}:${today.getMinutes()}`
    date.innerHTML = `${today.getDate()}/${today.getMonth()}`
    newPost.id = 'new-post';
    totalVal.innerHTML = '0'
    shareVal.innerHTML = '0'
    likeVal.innerHTML = '0'
    viewVal.innerHTML = '0'
    postContent.innerHTML = contentVal
    referenceNode.before(newNode)
    } else {
    alert('You did not write your status')
    }
})

btnLogout.addEventListener('click', () => {
    window.localStorage.clear();
    window.location = './login-signup.html';
})
