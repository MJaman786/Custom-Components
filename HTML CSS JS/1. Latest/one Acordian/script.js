const body = document.querySelector('body');
const dropdown = body.children[0]; 
const dropdownHead = dropdown.querySelector('.dropdown-head');
const dropTitle = dropdown.querySelector('.drop-title')
const dropIcon = dropdown.querySelector('.drop-icon');

const dropdownOption = dropdown.querySelector('.dropdown-option');
const scrollHeight = dropdownOption.scrollHeight;

isdrop = false;

dropdownHead.addEventListener('click', ()=>{
    if (!isdrop) {
        dropdownOption.style.maxHeight = scrollHeight + 'px';
        dropIcon.style.transform = 'rotate(180deg)';
        isdrop = true;
    }else{
        dropdownOption.style.maxHeight = '0px';
        dropIcon.style.transform = 'rotate(0deg)';
        isdrop = false;
    }
})

