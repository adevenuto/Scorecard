$(function(){

  // Game data
  var courseName;
  var courseLength = 9;
  var players = [];
  // Course object that captures game data
  var course = {};


  // $('.startGame').on('mousedown', function(){
  //   courseName = document.getElementById('course');
  //   console.log(courseLength)
  //   console.log(courseName)
  // })
  document.getElementById('gameData').onsubmit=function() {
    console.log(courseLength);
    console.log(document.getElementById('course').value);
    return false;
  }


  // Select 9 or 18 holes
  $('.radio').on('mousedown', function(e) {
    $(this).hasClass('nine') ? courseLength = 9 : courseLength = 18;
  });

  // Generate card
  function generateCard(holes) {
    for(var i=1;i<holes+1;i++) {
      $('#accordian').append("<div class='hole'>" +
                                "<div class='hole-num-container b-bottom'>" +
                                    "<p class='hole-num'>Hole:" + i + "</p>" +
                                "</div>" +
                                "<div class='descContainer'>" +
                                  "<div class='descLeft'>Player</div>" +
                                  "<div class='descRight'>" +
                                    "<div class='section score'>Score</div>" +
                                    "<div class='section gir'>GIR</div>" +
                                    "<div class='section fwh'>FWH</div>" +
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
                                "<input type='text' maxlength='4' id='player'>" +
                                "<span><i class='fa fa-minus' aria-hidden='true'></i></span>" +
                              "</div>")
    }
    if(player>0) $('.startGame').removeClass('hide');
  })











  // Remove players from game
  var click = ('ontouchstart' in document.documentElement)  ? 'touchstart' : 'mousedown';
  $('.addPlayers').on(click, '.fa-minus', function() {
    if (player>0) player--;
    $(this).closest('.inputContainer').remove();
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
  $('.checkbox').on('mousedown', function() {
    $(this).toggleClass('checked');
  });
})