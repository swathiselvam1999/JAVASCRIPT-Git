function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Reset error messages
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmPasswordError").innerText = "";

    var isValid = true;

    if (username.trim() === "") {
      document.getElementById("usernameError").innerText = "Username is required";
      isValid = false;
    }

    if (email.trim() === "") {
      document.getElementById("emailError").innerText = "Email is required";
      isValid = false;
    }

    if (password.trim() === "") {
      document.getElementById("passwordError").innerText = "Password is required";
      isValid = false;
    }

    if (confirmPassword.trim() === "") {
      document.getElementById("confirmPasswordError").innerText = "Confirm password is required";
      isValid = false;
    }

    if (password !== confirmPassword) {
      document.getElementById("passwordError").innerText = "Passwords do not match";
      document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
      isValid = false;
    }

    if (isValid) {
     window.location.href = 'login.html';
    }
  return false; 
  }