$(function(){

  // Open current hole
  $('.hole-info').on('mousedown', function(){
    $(this).parent().toggleClass('open');
  })

  // Change Strokes
  $('.increase').on('mousedown', function() {
    var currentNumber = parseInt($(this).next().text());
    currentNumber += 1;
    $(this).next().text(currentNumber);
  });
  $('.decrease').on('mousedown', function() {
    var currentNumber = parseInt($(this).prev().text());
    if (currentNumber>0) {
      currentNumber -= 1;
    }
     $(this).prev().text(currentNumber);
  });

  // GIR background Color
  $('.gir-checkbox').on('mousedown', function() {
    $(this).toggleClass('gir-checked');
  });

})