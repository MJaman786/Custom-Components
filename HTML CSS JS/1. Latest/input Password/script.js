const loginContainer = document.querySelector('.login-container');
const password = loginContainer.querySelector('#password');
const lockIcon = loginContainer.querySelector('.lock-icon');
const togglePassword = loginContainer.querySelector('#toggle-password');

isVisible = false;
togglePassword.addEventListener('click',()=>{
    if (isVisible) {
        togglePassword.innerHTML = 'visibility_off'
        togglePassword.classList.remove('icon-focus');
        password.type = 'password'
        isVisible = false;
    }else{
        togglePassword.innerHTML = 'visibility'
        togglePassword.classList.add('icon-focus');
        password.type = 'text'
        isVisible = true;
    }
})
