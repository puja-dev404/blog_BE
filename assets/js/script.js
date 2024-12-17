
// Get the password fields and toggle icons
const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const confirmPasswordField = document.getElementById('confirmPassword');

// Toggle visibility for password field
togglePassword.addEventListener('click', function () {
    // Toggle the password field type
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;

    // Toggle the eye icon
    this.classList.toggle('fa-eye-slash');
    this.classList.toggle('fa-eye');
});

// Toggle visibility for confirm password field
toggleConfirmPassword.addEventListener('click', function () {
    // Toggle the confirm password field type
    const type = confirmPasswordField.type === 'password' ? 'text' : 'password';
    confirmPasswordField.type = type;

    // Toggle the eye icon
    this.classList.toggle('fa-eye-slash');
    this.classList.toggle('fa-eye');
});
