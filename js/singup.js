$(document).ready(function() {
    // Check if Local Storage is supported by the browser
    if (typeof(Storage) !== "undefined") {
        // Load any previously saved data from Local Storage
        var savedData = JSON.parse(localStorage.getItem("formData"));
        if (savedData) {

            $("#martialArtsStyle").val(savedData.martialArtsStyle);
        }

        $("#registerForm").submit(function(event) {
            event.preventDefault();

            var formData = {
                name: $("#name").val(),
                email: $("#email").val(),
                gender: $("#gender").val(),
                 age: $("#age").val(),
               phone: $("#phone").val(),

                martialArtsStyle: $("#martialArtsStyle").val()
            };

            // Save the form data to Local Storage
            localStorage.setItem("formData", JSON.stringify(formData));

            // Debug: Print the form data to the console
            console.log("Form Data:", formData);
        });
    } else {
        console.log("Local Storage is not supported by this browser.");
    }
});




 function goHome() {
    window.location.href = "index.html";
  }

  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    showThanksMessage();
  });

  function showThanksMessage() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("thanksMessage").style.display = "block";

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;
    const martialArtsStyle = document.getElementById("martialArtsStyle").value;

    // Display input values
    document.getElementById("submittedName").innerText = `Name: ${name}`;
    document.getElementById("submittedEmail").innerText = `Email: ${email}`;
    document.getElementById("submittedGender").innerText = `Gender: ${gender}`;
    document.getElementById("submittedAge").innerText = `Age: ${age}`;
    document.getElementById("submittedPhone").innerText = `Phone Number: ${phone}`;
    document.getElementById("submittedMartialArtsStyle").innerText = `Martial Arts Style: ${martialArtsStyle}`;
  }
