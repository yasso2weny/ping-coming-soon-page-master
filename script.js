document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const errorMsgWrapper = document.getElementById('error-msg-wrapper');
    const errorMessage = document.getElementById('error-message');
    const button = document.getElementById('button');

    // Initially hide the error message
    errorMsgWrapper.style.display = 'none';

    button.addEventListener('click', function () {
      const emailValue = emailInput.value.trim();
      if (!isValidEmail(emailValue)) {
        // Invalid email, show error message and update input border color
        errorMsgWrapper.style.display = 'block';
        emailInput.style.borderColor = 'var(--error-clr)';
      } else {
        // Valid email, hide error message and reset input border color
        errorMsgWrapper.style.display = 'none';
        emailInput.style.borderColor = 'var(--primary-neutral)';
      }
    });

    // Function to validate email using a simple regex
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });