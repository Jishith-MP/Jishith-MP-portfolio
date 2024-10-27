let timeout;

function showButton() {
  $('.contactBtn').removeClass('d-none');
}

function hideButton() {
  $('.contactBtn').addClass('d-none');
}

function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

  if ($(window).scrollTop() > 0) {
    showButton();
  }

// Scroll event
$(window).on('scroll', debounce(() => {
  showButton();
  
  clearTimeout(timeout);
  
  timeout = setTimeout(hideButton, 5000);
}, 100)); 


 const $backToTopBtn = $('#backToTopBtn');

   $(window).scroll(function() {
        if ($(this).scrollTop() > $(window).height()) {
            $backToTopBtn.removeClass('d-none'); 
        } else {
            $backToTopBtn.addClass('d-none'); 
        }
  });

  $backToTopBtn.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
  });