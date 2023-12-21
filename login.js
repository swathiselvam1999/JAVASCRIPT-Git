document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function() {
      validateForm();
    });
  });

  function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Reset error messages
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

   
    var isValid = true;

    if (email.trim() === "") {
      document.getElementById("emailError").innerText = "Email is required";
      isValid = false;
    }

    if (password.trim() === "") {
      document.getElementById("passwordError").innerText = "Password is required";
      isValid = false;
    }

    if (isValid) {
   
      window.location.href = 'todo.html';
    }
  }