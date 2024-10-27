const themeBtn = $('.switcha');

function applyTheme(isLight) {
  if (isLight) {

    $('p, h1, h3, .nav-link').css('color', 'black');
    $('.projects').addClass('theme-white-projects').removeClass('theme-dark-projects');
    $('.edu').addClass('theme-white-edu').removeClass('edu-dark-theme');
    $('.theme-img').addClass('white-theme-img').removeClass('dark-theme-img');
    $('#certificate').addClass('white-theme-cer').removeClass('dark-theme-cer');
    $('input, textarea').addClass('white-input').removeClass('dark-input');
    $('.y-btn').addClass('btn-outline-success').removeClass('btn-outline-warning');
    $('label').addClass('white-input-label').removeClass('dark-input-label');
    $('.img').removeClass('imgTheme').addClass('whiteimgTheme');
    $('aside').addClass('aside-white').removeClass('aside-dark');
    $(':root').css('--brcr', 'white');
    $('body').removeClass('body-dark').addClass('body-white');
  } else {
 
    $('p, h1, h3, .nav-link').css('color', 'white');
    $('.projects').removeClass('theme-white-projects').addClass('theme-dark-projects');
    $('.edu').removeClass('theme-white-edu').addClass('edu-dark-theme');
    $(':root').css('--brcr', 'black');
    $('.theme-img').addClass('dark-theme-img').removeClass('white-theme-img');
    $('#certificate').removeClass('white-theme-cer').addClass('dark-theme-cer');
    $('input, textarea').addClass('dark-input').removeClass('white-input');
    $('.y-btn').addClass('btn-outline-warning').removeClass('btn-outline-success');
    $('label').addClass('dark-input-label').removeClass('white-input-label');
    $('.img').addClass('imgTheme').removeClass('whiteimgTheme');
    $('aside').addClass('aside-dark').removeClass('aside-white');
    $('body').addClass('body-dark').removeClass('body-white');
  }
}

 const savedTheme = localStorage.getItem('theme');
 const isLightTheme = savedTheme === 'light';
  themeBtn.prop('checked', isLightTheme); 
  applyTheme(isLightTheme); 

themeBtn.on('change', function() {
  const isLight = this.checked;
  applyTheme(isLight);
  
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
