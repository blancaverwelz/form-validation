const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const userName = document.getElementById('userName')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (firstName.value === '' || firstName.value == null) {
        messages.push('First Name is required')
    }
    if (lastName.value === '' || lastName.value == null) {
        messages.push('Last Name is required')
    }
    if (userName.value === '' || userName.value == null) {
        messages.push('User Name is required')
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }
    if (password.value.length >= 15) {
        messages.push('Password must be less than 15 characters')
    }

    if (confirmPassword.value === '' || confirmPassword.value == null){
        messages.push('Confirm your password')
    }
    if (confirmPassword.value != password.value) {
        messages.push('Password did not match')
    }

    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }

});