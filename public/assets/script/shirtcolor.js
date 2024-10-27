$(document).ready(function() {
  let shirtColor = 'blue';
  const $img = $('#avatar');

  function changeShirtColor() {
    switch (shirtColor) {
      case 'blue':
        $img.attr('src', 'assets/images/avatar_red.png');
        shirtColor = 'red';
        break;
      case 'red':
        $img.attr('src', 'assets/images/avatar_green.png');
        shirtColor = 'green';
        break;
      case 'green':
        $img.attr('src', 'assets/images/avatar_violet.png');
        shirtColor = 'violet';
        break;
      case 'violet':
        $img.attr('src', 'assets/images/avatar_blue.png');
        shirtColor = 'blue';
        break;
      default:
        break;
    }
  }

  $img.on('mouseenter', changeShirtColor);
  $img.on('mouseleave', changeShirtColor);
  $img.on('touchstart', changeShirtColor);
  $img.on('touchend', function(event) {
    event.preventDefault();
  });
});