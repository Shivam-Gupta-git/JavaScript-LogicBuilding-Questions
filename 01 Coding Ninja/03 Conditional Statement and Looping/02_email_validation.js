let form = document.getElementById("emailForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let message = document.getElementById("message");

  let atIndex = email.indexOf("@");
  let dotIndex = email.lastIndexOf(".");

  // Check email length
  if (email.length <= 11) {
    message.textContent = "Email length must be greater than 11 characters.";
  }

  // Check @ and . positions
  else if (atIndex === -1 || dotIndex === -1 || atIndex >= dotIndex) {
    message.textContent = "Please enter a valid email address.";
  }

  // Check minimum 3 characters between @ and .
  else if (dotIndex - atIndex - 1 < 3) {
    message.textContent = "At least 3 characters are required between @ and .";
  }

  // Check characters after .
  else if (email.length - dotIndex - 1 < 2 || email.length - dotIndex - 1 > 3) {
    message.textContent = "After dot, only 2 or 3 characters are allowed.";
  }

  // Email is valid
  else {
    message.textContent = "Email is valid!";
  }
});