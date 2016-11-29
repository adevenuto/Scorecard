$(function(){

  // Select 9 or 18 holes
  $('.nine, .eighteen').on('mousedown', function(e) {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('#accordian').empty();
    $(this).hasClass('nine') ? generateCard(9) : generateCard(18)
  });
  // Generate card
  function generateCard(holes) {
    for(var i=1;i<holes+1;i++) {
      $('#accordian').append("<div class='hole'>" +
                                "<div class='hole-num-container b-bottom'>" +
                                    "<p class='hole-num'>Hole:" + i + "</p>" +
                                "</div>" +
                                "<div class='descContainer'>" +
                                  "<div class='descLeft'>Name</div>" +
                                  "<div class='descRight'>" +
                                    "<div class='section'>Score</div>" +
                                    "<div class='section'>GIR</div>" +
                                    "<div class='section'>Putts</div>" +
                                  "</div>" +
                                "</div>" +
                             "</div>");
    }
  };
  var player = 0;
  $('.fa-plus').on('mousedown', function(){
    var _this = $(this);
    player ++;
    if (player<=4) {
      $(this).addClass('feedbackRotate');
      setTimeout(function(){ _this.removeClass('feedbackRotate'); }, 200);

      $('.addPlayers').append("<label for='player" + player + "'>Player-" + player + "</label>" +
                             "<input type='text' id='player" + player + "'>")
    }
  })
  // Open current hole
  $('#accordian').on('mousedown', '.hole-num-container', function(){
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