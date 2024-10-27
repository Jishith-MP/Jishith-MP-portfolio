const images = $('.slider-item');
let currentIndex = 2; 

function updateImages() {
  images.removeClass('center left1 left2 right1 right2');

  images.eq((currentIndex - 2 + images.length) % images.length).addClass('left2');
  images.eq((currentIndex - 1 + images.length) % images.length).addClass('left1');
  images.eq(currentIndex % images.length).addClass('center');
  images.eq((currentIndex + 1) % images.length).addClass('right1');
  images.eq((currentIndex + 2) % images.length).addClass('right2');
}

// Initialize slider
updateImages();