document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('first-name');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Validate Name
        if (nameInput.value.trim().length < 4) {
            nameError.textContent = 'Name must be at least 4 characters long';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Validate Username
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Username cannot be empty';
            isValid = false;
        } else {
            usernameError.textContent = '';
        }

        // Validate Password
        if (passwordInput.value.trim().length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        // If the form is invalid, prevent submission
        if (!isValid) {
            event.preventDefault();
        }
    });
});
