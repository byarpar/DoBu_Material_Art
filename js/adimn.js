$(document).ready(function() {
  $("#login-form").submit(function(e) {
    e.preventDefault();

    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();

    // Perform validation and authentication here
    // For demonstration purposes, let's assume the correct username, email, and password are "admin", "admin@example.com", and "admin123"
    if (username === "admin" && email === "admin@example.com" && password === "admin123") {
      // Successful login
      window.location.href = "table.html"; // Redirect to the admin dashboard
    } else {
      // Failed login
      $("#error-message").text("Invalid username, email, or password");
    }
  });
});
