const alertWrapper = document.querySelector('.alert-wrapper');
const alertBox = alertWrapper.querySelector('.alert-box');
const alertHeader = alertBox.querySelector('.alert-header');
const closeBtn = alertHeader.children[0];

setTimeout(() => {
    alertWrapper.classList.add('slide-in');
}, 2000);

closeBtn.addEventListener('click', ()=>{
    alertWrapper.classList.remove('slide-in');
})