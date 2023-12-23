function validateLogin() {
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    // Reset error messages
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    if(email === ''){
      document.getElementById('emailError').textContent ='Please enter Email';
      return false;
    }

    if(password === ''){
      document.getElementById('passwordError').textContent ='Please enter Password';
      return false;
    }

    if(email !== storedEmail || password !== storedPassword){
      document.getElementById('passwordError').textContent ='Incorrect email or password';
      return false;
    }
    window.location.href = 'todo.html';

    return false;
  }
