function submitForm() {
    // Check if all fields are filled
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Hide the form
    document.getElementById('registrationForm').style.display = 'none';
    // Display success message
    document.getElementById('successMessage').classList.remove('hidden');
}
