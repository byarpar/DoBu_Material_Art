// jQuery code to handle the mobile menu toggle
$(document).ready(function() {
  $('.menu-toggle').on('click', function() {
    $('#navLinks').toggleClass('show');
  });
});

// Animation for the logo
const logo = document.querySelector('.logo');
let rotation = 0;
let rotating = false;

logo.addEventListener('click', () => {
  if (!rotating) {
    rotating = true;
    rotateLogo();
  }
});

function rotateLogo() {
  rotation += 10;
  logo.style.transform = `rotate(${rotation}deg)`;

  if (rotation < 360) {
    requestAnimationFrame(rotateLogo);
  } else {
    rotation = 0;
    rotating = false;
  }
}

$(document).ready(function() {
  $("#subscribeButton").click(function(event) {
    event.preventDefault();
    $("#subscribeModal").css("display", "block");
  });

  $(".close").click(function() {
    $("#subscribeModal").css("display", "none");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscribeForm");
  const emailInput = document.getElementById("emailInput");
  const modal = document.getElementById("subscribeModal");
  const closeButton = document.querySelector(".close");


  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
//\\

function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}


$(document).ready(function () {
  $("#subscribe-form").submit(function (event) {
    event.preventDefault();
    const email = $("#email-input").val();
    // You can add further validation for the email here if required

    // Simulate a subscription process (Replace this with your actual subscription logic)
    setTimeout(function () {
      $("#subscribe-form")[0].reset(); // Reset the form
      $("#success-message").fadeIn().delay(2000).fadeOut();
    }, 1000);
  });
});


// jQuery script if needed
$(document).ready(function() {
  // Add any jQuery code here if required
});
