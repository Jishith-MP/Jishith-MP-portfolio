const elements = $('.hidden-element');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const animation = $(entry.target).data('animation');
      $(entry.target).addClass('animate__animated ' + animation);
    }
  });
}, {
  threshold: 0.3
});

elements.each(function() {
  observer.observe(this);
});