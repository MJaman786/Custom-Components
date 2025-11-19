const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

const usernameStatus = document.getElementById("username-status");
const emailStatus = document.getElementById("email-status");
const passwordStatus = document.getElementById("password-status");

// Regex patterns
const usernamePattern = /^[a-zA-Z0-9_]{3,15}$/; // 3–15 chars, letters/numbers/underscore
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
// Min 6 chars, 1 uppercase, 1 number, 1 special char

function validateInput(input, pattern, statusEl, successMsg, errorMsg) {
    if (pattern.test(input.value.trim())) {
        statusEl.textContent = successMsg;
        statusEl.classList.add("valid");
        statusEl.classList.remove("invalid");
        return true;
    } else {
        statusEl.textContent = errorMsg;
        statusEl.classList.remove("valid");
        statusEl.classList.add("invalid");
        return false;
    }
}

function checkForm() {
    const validUsername = validateInput(username, usernamePattern, usernameStatus, "✅ Valid username", "❌ Username must be 3–15 chars (letters, numbers, _)");
    const validEmail = validateInput(email, emailPattern, emailStatus, "✅ Valid email", "❌ Enter a valid email address");
    const validPassword = validateInput(password, passwordPattern, passwordStatus, "✅ Strong password", "❌ Min 6 chars, 1 uppercase, 1 number, 1 special char");

    // Enable button only if all are valid
    loginBtn.disabled = !(validUsername && validEmail && validPassword);
}

// Event listeners
[username, email, password].forEach(input => {
    input.addEventListener("input", checkForm);
});
