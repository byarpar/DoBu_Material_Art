 const carouselSlides = document.querySelector('.carousel-slides');
    const carouselSlide = document.querySelectorAll('.carousel-slide');
    const slideWidth = carouselSlide[0].clientWidth;

    let counter = 1;

    setInterval(() => {
      carouselSlides.style.transition = 'transform 0.3s ease';
      carouselSlides.style.transform = `translateX(${-slideWidth * counter}px)`;
      counter++;

      if (counter === carouselSlide.length) {
        setTimeout(() => {
          carouselSlides.style.transition = 'none';
          carouselSlides.style.transform = 'translateX(0)';
          counter = 1;
        }, 300);
      }
    }, 3000);

    function redirectToRegister() {
      // Replace this with your actual redirection code
      alert("Redirecting to registration page...");
    }
