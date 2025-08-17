document.addEventListener('DOMContentLoaded', function() {
  const passwordInput = document.getElementById('new-password-input');
  const strengthIndicator = document.querySelector('.strength-indicator');

  passwordInput.addEventListener('input', function() {
  const password = this.value;
  let strength = ''; // Initially an empty string
  let color = ''; // Initially an empty string for the color

  if (password.length >= 12) {
    strength = 'Strong';
    color = '#34a853'; // Green
  } else if (password.length >= 8) {
    strength = 'Medium';
    color = '#fbbc05'; // Yellow
  } else if (password.length > 0) {
    strength = 'Too Short';
    color = '#ea4335'; // Red
  }

  strengthIndicator.textContent = strength;
  strengthIndicator.style.color = color;
});
});
