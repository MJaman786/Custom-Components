const eyeIcon = document.querySelector('.eye-icon');
const password = document.querySelector('#password');

let isVisible = false;

eyeIcon.addEventListener('click', () => {
    if (isVisible) {
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
        password.setAttribute('type', 'password');
        isVisible = false;
    } else {
        eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
        password.setAttribute('type', 'text');
        isVisible = true;
    }
})


const warIcon = document.querySelector('.warn-icon');
const warningText = document.querySelector('.warning-text');
const submitBtn = document.querySelector('#submit-btn');

const myPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

password.addEventListener('input', (e) => {
    let isGood = myPattern.test(e.target.value)
    if (isGood) {
        warningText.innerHTML = '✅ Password is strong'
        warningText.style.color = 'green';
        submitBtn.disabled = false;
        submitBtn.style.cursor = 'pointer';
    } else {
        warningText.innerHTML = '❌ Password Must be strong'
        warningText.style.color = 'crimson';
        submitBtn.disabled = true;
        submitBtn.style.cursor = 'not-allowed';
    }
})