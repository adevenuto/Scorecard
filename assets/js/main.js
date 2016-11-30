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
  // Add players to game
  var player = 0;
  $('.fa-plus').on('mousedown', function() {
    var _this = $(this);
    if (player<4) {
      player ++;
      $(this).addClass('feedbackRotate');
      setTimeout(function(){ _this.removeClass('feedbackRotate'); }, 150);

      $('.addPlayers').append("<div class='inputContainer'>" +
                                "<label for='player'>Player</label>" +
                                "<input type='text' id='player'><i class='fa fa-minus' aria-hidden='true'></i>" +
                              "</div>")
    }
    if(player>0) $('.startGame').removeClass('hide');
  })

  // Remove players from game
  var click = ('ontouchstart' in document.documentElement)  ? 'touchstart' : 'mousedown';
  $('.addPlayers').on(click, '.fa-minus', function() {
    if (player>0) player--;
    $(this).parent().remove();
    if(player===0) $('.startGame').addClass('hide');
  })

  // Open selected hole
  $('#accordian').on('mousedown', '.hole-num-container', function(){
    $(this).parent().toggleClass('open');
  })

  // Increase Strokes
  $('.increase').on('mousedown', function() {
    var currentNumber = parseInt($(this).next().text());
    currentNumber += 1;
    $(this).next().text(currentNumber);
  });

  // Decrease Strokes
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