$(document).ready(function() {
  let currentImageIndex = 0;
  const totalImages = $('.image-container').length;

  function showImage(index) {
    $('.image-container').removeClass('active');
    $('.image-container').eq(index).addClass('active');
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
  }

  function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
  }

  $('#next-btn').click(showNextImage);
  $('#prev-btn').click(showPrevImage);

  // Show the first image initially
  showImage(currentImageIndex);
});
