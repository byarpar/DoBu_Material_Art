const registerButtons = document.querySelectorAll('.register-button');
const registrationForm = document.querySelector('.registration-form');

function showRegistrationForm() {
  registrationForm.classList.add('show');
}

function hideRegistrationForm(event) {
  event.preventDefault();
  registrationForm.classList.remove('show');
}

registerButtons.forEach((button) => {
  button.addEventListener('click', showRegistrationForm);
});
