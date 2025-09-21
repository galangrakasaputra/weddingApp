document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    loginForm.addEventListener('submit', function(event) {
        let valid = true;

        // Clear previous error messages
        usernameError.textContent = '';
        passwordError.textContent = '';

        // Validate username
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Username is required.';
            valid = false;
        }

        // Validate password
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required.';
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    const passwordToggle = document.getElementById('passwordToggle');
    passwordToggle.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        passwordToggle.classList.toggle('active');
    });
});