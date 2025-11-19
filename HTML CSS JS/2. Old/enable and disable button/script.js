const myBtn = document.querySelector('.myBtn');
const disableBtn = document.querySelector('.disableBtn');
const enableBtn = document.querySelector('.enableBtn');

disableBtn.addEventListener('click', ()=>{
    myBtn.setAttribute('disabled', 'true');
})

enableBtn.addEventListener('click', ()=>{
    myBtn.removeAttribute('disabled');
})