// Dots fill patterns
const dots = $('.dots');
const fillPatterns = [
  { filled: 6, total: 7 }, 
  { filled: 6, total: 7 }, 
  { filled: 4, total: 7 }, 
  { filled: 3, total: 7 }, 
  { filled: 6, total: 7 }, 
  { filled: 5, total: 7 },
  { filled: 7, total: 7 },
  { filled: 5, total: 7 },
  { filled: 4, total: 7 }
];

dots.each(function(index) {
  const wrapperDiv = $('<div></div>').addClass('responsive-gap').css({
    display: 'flex',
    flexDirection: 'row'
  });
  
  const pattern = fillPatterns[index];

  for (let i = 0; i < pattern.total; i++) {
    const circleDiv = $('<div></div>').css({
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: (i < pattern.filled) ? '#39ff14' : 'transparent',
      border: '1px solid #39ff14',
      boxShadow: (i < pattern.filled) ? '0 0 10px white' : 'none' 
    });

    wrapperDiv.append(circleDiv);
  }

  $(this).append(wrapperDiv);
});