function isOldDevice() {
  return (
    window.innerWidth <= 480 && 
    window.devicePixelRatio <= 1.5 && 
    /Android [2-5]|iPhone [1-5]|SamsungBrowser/i.test(navigator.userAgent) 
  );
}

//turn of the animation in older devices 
if (isOldDevice()) {
  $('.animate__animated').each(function() {
    $(this).css({
      'animation': 'none !important',
      'transition': 'none !important'
    });
  });
}
