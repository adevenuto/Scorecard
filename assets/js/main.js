$(function(){
  // Default game length (9 holes)
  var courseLength = 9;
  // Game Object
  var game = {};

  // Prevent form submission on 'enter'
  document.onkeypress = function (e) {
    e = e || window.event;
    if (e.which === 13) e.preventDefault();
  };
  // Generate game id
  function generateId(size) {
    var length = size;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < length; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text
  }

  // Build game object
  document.getElementById('gameData').onsubmit=function(e) {
    e.preventDefault();
    game['game'] = {};
    game.game['id'] = generateId(20);
    game.game['courseName'] = document.getElementById('course').value;
    game.game['gameLength'] = courseLength;
    game.game['players'] = {};
    var participants = document.querySelectorAll('.currentPlayers');
    participants.forEach(function(name){
      game.game.players[generateId(5)] = name.value;
    })

    generateCard(game.game.gameLength)

    console.log(game)

    // prevent form submission
    return false;
  }


  // Select 9 or 18 holes
  $('.radio').on('mousedown', function() {
    $(this).hasClass('nine') ? courseLength = 9 : courseLength = 18;
  });








  // Generate card
  function generateCard(holes) {
    for(var i=1;i<holes+1;i++) {
      var accordian = document.getElementById('accordian');
      accordian.innerHTML += "<div class='holes'>" +
                                "<div class='hole-num-container b-bottom'>" +
                                    "<p class='hole-num'>Hole:" + i + "</p>" +
                                "</div>" +
                                "<div class='descContainer'>" +
                                  "<div class='descLeft'>Player</div>" +
                                  "<div class='descRight'>" +
                                    "<div class='section score'>Score</div>" +
                                    "<div class='section gir'>GIR</div>" +
                                    "<div class='section fwh'>FWH</div>" +
                                    "<div class='section putts'>Putts</div>" +
                                  "</div>" +
                                "</div>" +
                             "</div>";
    }
    addPlayers();
  };
  // Add players to card
  function addPlayers() {
    var holes = document.querySelectorAll('.holes');
    var players = game.game.players;
    var numOfPlayers = Object.keys(players).length;
    // iterate through each hole
    for(var i=0;i<holes.length;i++) {
      for (key in players) {
        var newPlayer = "<div class='player' id='"+ key +"'>" +
                        "<div class='player-name'>" +
                          "<div class='player-cell'>" + players[key] +"</div>" +
                        "</div>" +
                        "<div class='player-controls'>" +
                          "<div class='controls putts'>" +
                            "<div class='increase equal-hor'><i class='fa fa-arrow-up'></i></div>" +
                            "<div class='hole-score equal-hor'>0</div>" +
                            "<div class='decrease equal-hor'><i class='fa fa-arrow-down'></i></div>" +
                          "</div>" +
                          "<div class='checkbox controls fwh'><i class='fa fa-check'></i></div>" +
                          "<div class='checkbox controls gir'><i class='fa fa-check'></i></div>" +
                          "<div class='controls score b-left-2'>" +
                            "<div class='increase equal-hor'><i class='fa fa-arrow-up'></i></div>" +
                            "<div class='hole-score equal-hor'>0</div>" +
                            "<div class='decrease equal-hor'><i class='fa fa-arrow-down'></i></div>" +
                          "</div>" +
                        "</div>" +
                      "</div>";
      holes[i].innerHTML += newPlayer;
      }
    }
  }

  // Generate new input field in form
  var player = 0;
  $('.fa-plus').on('mousedown', function() {
    var _this = $(this);
    if (player<4) {
      player ++;
      $(this).addClass('feedbackRotate');
      setTimeout(function(){ _this.removeClass('feedbackRotate'); }, 150);

      $('.addPlayers').append("<div class='inputContainer'>" +
                                "<label for='player'>Player</label>" +
                                "<input type='text' maxlength='5' class='currentPlayers' required>" +
                                "<span><i class='fa fa-minus' aria-hidden='true'></i></span>" +
                              "</div>")
    }
    if(player>0) $('.startGame').removeClass('hide');
  })











  // Remove players from game
  var click = ('ontouchstart' in document.documentElement)  ? 'touchstart' : 'mousedown';
  console.log(accordian)
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
  $('#accordian').on('mousedown', '.increase', function() {
    var currentNumber = parseInt($(this).next().text());
    currentNumber += 1;
    $(this).next().text(currentNumber);
  });

  // Decrease Strokes
  $('#accordian').on('mousedown','.decrease', function() {
    var currentNumber = parseInt($(this).prev().text());
    if (currentNumber>0) {
      currentNumber -= 1;
    }
     $(this).prev().text(currentNumber);
  });

  // GIR background Color
  $('#accordian').on('mousedown','.checkbox', function() {
    console.log("here")
    $(this).toggleClass('checked');
  });
})